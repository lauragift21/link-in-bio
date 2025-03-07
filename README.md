# Link-in-bio - A Linktree Clone

## 📥 Cloning the Project

To get started, you need to clone this repository to your local machine. You can do this using **Git** or the **GitHub CLI**.

### **Option 1: Using Git**
Run the following command in your terminal:

```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### **Option 2: Using GitHub CLI**
If you have the [GitHub CLI](https://cli.github.com/) installed, you can clone the repository with:

```sh
gh repo clone your-username/your-repo
cd your-repo
```

Once cloned, install the project dependencies:

```sh
npm install
```

Now, you’re ready to start editing and running the project! 🚀

---

## 🚀 Project Structure

Inside your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

---

## 🛠 Using the Project

### **Editing Your Links**
The main page of this project is located at:  
📄 **`src/pages/index.astro`**

To update your links:
1. Open **`index.astro`** in your code editor.
2. Locate the section where links are defined (inside the `<main>` or `<section>` tags).
3. Modify or add new links following the structure provided.

Example:

```js
const links = [
  {
    title: 'Website',
    url: 'https://giftegwuenu.com',
    icon: 'https://api.iconify.design/mdi:web.svg?color=white',
  },
];
```

### **Customizing the Layout**
- The overall layout is managed in **`src/layouts/Layout.astro`**.
- To modify styles, check the CSS or styles in the global file (if applicable).

### **Changing the Favicon**
- Replace `favicon.svg` inside the **`public/`** folder with your own icon.

---

## 🚀 Deploying to Cloudflare Pages

Cloudflare Pages is a great option for hosting Astro projects, offering a fast and free way to deploy your link-in-bio site.

### **Step 1: Push Your Code to GitHub**
Ensure your project is in a GitHub repository. If not, create a new repository and push your code:

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

### **Step 2: Connect Cloudflare Pages to GitHub**
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/).
2. Click **"Create a project"** and select **"Connect to GitHub"**.
3. Authorize Cloudflare to access your repository.
4. Select your **repository** and click **"Begin setup"**.

### **Step 3: Configure Build Settings**
1. **Set the framework preset:** Choose **Astro**.
2. **Build command:**
   ```sh
   npm run build
   ```
3. **Output directory:**
   ```
   dist
   ```
4. Click **"Save and Deploy"**.

### **Step 4: Configure Custom Domain (Optional)**
- After deployment, you’ll get a Cloudflare subdomain (e.g., `your-project.pages.dev`).
- To use a custom domain, go to the **"Custom Domains"** tab in Cloudflare Pages and add your domain.

### **Step 5: Deploy Updates**
Any time you push changes to your GitHub repo, Cloudflare Pages will automatically redeploy the latest version.

---

## 🧞 Commands

All commands are run from the root of the project in a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

