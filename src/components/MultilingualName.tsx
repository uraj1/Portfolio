import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const names = [
  { text: "John Doe", language: "English" },
  { text: "ジョン・ドウ", language: "Japanese" },
  { text: "约翰·多伊", language: "Chinese" },
  { text: "जॉन डो", language: "Hindi" },
  { text: "요한 도", language: "Korean" },
  { text: "Джон Доу", language: "Russian" }
];

export default function MultilingualName() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % names.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-20 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {names[currentIndex].text}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {names[currentIndex].language}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}