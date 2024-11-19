import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:contact@example.com", label: "Email" },
  ];

  const tools = ["MERN-Stack", "MySql", "TypeScript", "SpringBoot", "Angular"];

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    whileHover={{ y: -2 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Projects", "Experience", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Tech Stack & Tools</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Here are some of the technologies and tools I work with:
              </p>
              <ul className="space-y-2">
                {tools.map((tool, index) => (
                  <li
                    key={index}
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
