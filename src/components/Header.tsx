import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#skills" className="hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
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

      {/* Mobile Menu with Smooth Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden px-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4 text-gray-800 dark:text-gray-300 pb-4">
              <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Skills
              </a>
              <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Experience
              </a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Projects
              </a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Contact
              </a>

              <div className="flex gap-4 pt-2">
                <a href="https://github.com/uraj1" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" />
                </a>
                <a href="https://in.linkedin.com/in/umang-raj-verma-538562283" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" />
                </a>
                <a href="mailto:umangraj1001@gmail.com">
                  <Mail className="w-5 h-5 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
