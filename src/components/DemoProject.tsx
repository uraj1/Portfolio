import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

type ProjectSize = "large" | "medium" | "small";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  size: ProjectSize;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with React and Node.js",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    size: "large",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website with smooth animations",
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    size: "medium",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Firebase", "Material-UI"],
    github: "https://github.com",
    live: "https://example.com",
    size: "medium",
  },
];

export default function DemoProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const boxStyles: Record<ProjectSize, string> = {
    large: "row-span-2 col-span-2",
    medium: "row-span-2 col-span-1",
    small: "row-span-1 col-span-1",
  };

  return (
    <section
      id="projects"
      className="py-15 bg-gray-50 dark:bg-black transition-colors duration-200"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/3"
        >
          <h2 className="text-3xl font-bold text-left mb-6 dark:text-white text-gray-800">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Here are a few of my notable projects, showcasing my ability to
            deliver impactful solutions. Explore the code repositories and live
            demos to see them in action!
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full md:w-2/3 bg-white dark:bg-black rounded-xl shadow-md p-4"
        >
          <div className="grid grid-cols-3 auto-rows-[150px] gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`relative overflow-hidden bg-gray-50 dark:bg-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-150 border-b-4 border-transparent dark:border-black ${
                  boxStyles[project.size]
                }`}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-150"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t dark:from-black dark:via-black/40 dark:to-transparent from-white via-white/60 to-transparent"></div>

                {/* Card Content */}
                <div className="relative p-5 h-full flex flex-col justify-end text-black dark:text-white">
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-900 dark:text-gray-300 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-purple-700/90 px-3 py-1 rounded-full text-xs text-white font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-black  dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-black dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
