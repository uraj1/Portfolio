import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Download } from 'lucide-react';

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2021 - Present",
    description: "Led development of multiple high-impact web applications using React and TypeScript.",
    side: "right"
  },
  {
    title: "UI/UX Designer",
    company: "Design Studio",
    period: "2019 - 2021",
    description: "Created user-centered designs for various clients across different industries.",
    side: "left"
  },
  {
    title: "Full Stack Developer",
    company: "Innovation Labs",
    period: "2018 - 2019",
    description: "Developed full-stack applications using modern technologies and best practices.",
    side: "right"
  },
  {
    title: "Junior Developer",
    company: "Startup Inc",
    period: "2017 - 2018",
    description: "Developed and maintained various web applications using modern technologies.",
    side: "left"
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Professional Experience</h2>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-800 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: exp.side === 'left' ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex ${exp.side === 'left' ? 'justify-start' : 'justify-end'} w-full`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-8 w-4 h-4 rounded-full bg-purple-600 transform -translate-x-1/2 border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  <div className={`w-5/12 ${exp.side === 'right' && 'ml-auto'}`}>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                          <p className="text-purple-600 dark:text-purple-400">{exp.company}</p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{exp.period}</p>
                          <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}