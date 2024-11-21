import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MultilingualName from './MultilingualName';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-white to-gray-50 dark:from-black dark:via-gray-900 dark:to-black pt-20">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <MultilingualName />
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold pb-3 mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent px-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Software Developer & Designer
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Crafting beautiful digital experiences through code and design
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a 
              href="#projects"
              className="px-6 py-3 bg-purple-600 text-white rounded-full flex items-center gap-2 hover:bg-purple-700 transition-colors"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact"
              className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}