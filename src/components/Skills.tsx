import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Database, Globe, Terminal, Cpu } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6" />,
    items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: <Terminal className="w-6 h-6" />,
    items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Design",
    icon: <Palette className="w-6 h-6" />,
    items: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Design Systems"]
  },
  {
    category: "DevOps",
    icon: <Cpu className="w-6 h-6" />,
    items: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Kubernetes"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: ["MySQL", "MongoDB", "Redis", "GraphQL", "Firebase"]
  },
  {
    category: "Other",
    icon: <Globe className="w-6 h-6" />,
    items: ["SEO", "Performance", "Analytics", "Testing", "Agile"]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-black transition-colors duration-200">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="skill-card bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-sm transform transition-transform hover:scale-105 hover:shadow-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}