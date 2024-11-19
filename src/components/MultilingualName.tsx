import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const names = [
  { text: "Umang Raj", language: "English" },
  { text: "ウマン・ラージ", language: "Japanese" },
  { text: "乌芒·拉杰", language: "Chinese" },
  { text: "उमंग राज", language: "Hindi" },
  { text: "우망 라지", language: "Korean" },
  { text: "Уманг Радж", language: "Russian" }
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
          <h2 className="text-4xl pb-1 font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
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