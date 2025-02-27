import { motion } from 'framer-motion';

interface LinkCardProps {
  title: string;
  url: string;
  icon?: string;
  delay?: number;
}

export default function LinkCard({ title, url, icon, delay = 0 }: LinkCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full p-4 my-4 rounded-xl bg-white/10  backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-3 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {icon && <img src={icon} alt="" className="w-6 h-6" />}
      <span className="text-white font-medium">{title}</span>
    </motion.a>
  );
}
