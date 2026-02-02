export interface OgData {
  title: string;
  description: string;
  image: string;
  siteName: string;
  url: string;
  domain: string;
  favicon: string;
}

export async function fetchOgData(url: string): Promise<OgData> {
  const domain = new URL(url).hostname.replace('www.', '');
  const favicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

  const fallback: OgData = {
    title: domain,
    description: '',
    image: '',
    siteName: domain,
    url,
    domain,
    favicon,
  };

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; link-preview-bot)',
        'Accept': 'text/html',
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) return fallback;

    // Only read the first 50KB — OG tags live in <head>
    const reader = response.body?.getReader();
    if (!reader) return fallback;
    const chunks: Uint8Array[] = [];
    let totalSize = 0;
    const maxSize = 50 * 1024;
    while (totalSize < maxSize) {
      const { done, value } = await reader.read();
      if (done || !value) break;
      chunks.push(value);
      totalSize += value.length;
    }
    reader.cancel();
    const html = new TextDecoder().decode(Buffer.concat(chunks).slice(0, maxSize));

    const getMetaContent = (property: string): string => {
      // Match both property="" and name="" variants
      const patterns = [
        new RegExp(`<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']*)["']`, 'i'),
        new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+(?:property|name)=["']${property}["']`, 'i'),
      ];
      for (const pattern of patterns) {
        const match = html.match(pattern);
        if (match?.[1]) return match[1];
      }
      return '';
    };

    const getTitle = (): string => {
      const ogTitle = getMetaContent('og:title');
      if (ogTitle) return ogTitle;
      const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
      return titleMatch?.[1]?.trim() || domain;
    };

    return {
      title: getTitle(),
      description: getMetaContent('og:description') || getMetaContent('description'),
      image: getMetaContent('og:image'),
      siteName: getMetaContent('og:site_name') || domain,
      url,
      domain,
      favicon,
    };
  } catch {
    return fallback;
  }
}
