import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm dark:shadow-purple-900/20"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          Portfolio
        </motion.div>
        <div className="flex items-center gap-6">
          <a href="#skills" className="hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/uraj1" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors" />
          </a>
          <a href="https://in.linkedin.com/in/umang-raj-verma-538562283" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors" />
          </a>
          <a href="mailto:umangraj1001@gmail.com">
            <Mail className="w-5 h-5 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}