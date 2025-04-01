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
    title: "CryptoXplorer",
    description:
      "A crypto app which is made using React Js and its UI library. ",
    image:
      "https://media-hosting.imagekit.io/1555d82972c54041/freepik__crypto-currency__51080.jpeg?Expires=1838130251&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WfviHKf5S6xpGoWeH07vkHQcrRsAY8eWurgACJ~xr547uor6Dhh5csOurOjABso8M9jX5LpQZqYFm~dXZsQ6naRZGvmEb-amcSqMP9Ftf6Ta87sH0gUIhQ8T6Pm5qGXD0uohPZA5ZL8KwiwAR3Efj8FgH7N8pZa-qpbafb5EY8ijzVUNRP5MGCRPw82x-kudci86pFrFtFUtGbbX937VWlCYwWGbzpz~X9upo7a9-fBkiwJ1oDTI2fD2lAF42aXIiFOHnSrDq2nRbtgrCq2SMs1ZscEECVGFJ8V6FCJH9TlnrFgjiQ6EsogwIwwL-h4IzP8ddXcDzGiWa21M9h5wYg__",
    tech: ["React", "Chakra UI", "Node.js", "REST API"],
    github: "https://github.com/uraj1/CryptoXplorer",
    live: "https://cryptoxplorerapp.netlify.app/",
    size: "large",
  },
  {
    title: "GitHub Repo. Viewer",
    description: "This web app showcases a user's profile, bio and location.",
    image:
      "https://media-hosting.imagekit.io/5a34c87a8ed14b8c/freepik__candid-image-photography-natural-textures-highly-r__51079.jpeg?Expires=1838130251&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mqnJ39YpFn5~vi9emzA7fytWHnI1GT8h8YShmlOqiiVIMuyLg-OCIKWrTB10MWxnx2OC9HsGTYtpUiN9PM5UK7shVANabKLSjWWbQpnOfBB2TxWoAudHq~Z~X8biGzqbqJt3L6QaaDfMijTem~C7sfizMKlEfmhHTLHl9MQ8Z4pj2aLgHhaaH6opgA0TidzhiSNoOC-kzxgWa5N0bRci2r7c5P06FkLHw2CfoBBN~ZKPgG7jFiKd5myLk09JF9FI~tSXI~PSFAfq5RP276djvw3PyqT9H05AmM7Q5Jxsu2LD8JBle-fQLz2HoIi7RBlcmmcCB1NcdvYR25q7zCsi2A__",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/uraj1/Github-Repo-Viewer",
    live: "https://github-repositories-viewer.netlify.app/",
    size: "medium",
  },
  {
    title: "Text to Speech",
    description: "Tool to transform written content into natural-sounding audio",
    image:
      "https://media-hosting.imagekit.io/f76067085ca24258/589395c0-ec14-4844-9674-a27e76ef8f55.jfif?Expires=1838130251&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wfygwEW1LkEzMO8riy9WZVT~Mw52IAx7Hih8a-0ZRqOLsztNa~HkPCa749YlVCshl-J6-6-Yhlbsn9hmnvZSzJt5KmLZnU2txyD5N4Ad1ewlm9m9vRSNcpKcxkQ1LS41buxJQ0QeY19mdLs9Vmh~Rqkl--DjoX5gYRlit20Un6ze79fhEaXE8sFMbZNTr4h3k~Jx8JV8CNREmlo-zhZVCMMa7YPR4AXqtaJ-wq1x072Hj86BcU7x4RGjiFWU6t7uAUvp2iDnHoK8Oq~rK8h7nnWvkwarSjYmjzzHCn4d7MDHg2H3xRDrRsJumAJwcnuaB93G9aihyLzSofAgMhmHLA__",
    tech: ["React", "Material-UI"],
    github: "https://text-to-speech-ur.netlify.app/",
    live: "https://text-to-speech-ur.netlify.app/",
    size: "medium",
  },
  
  {
    title: "PicMosaic",
    description: "PicMosaic utilizes AI to craft diverse images from user prompts",
    image:
      "https://media-hosting.imagekit.io/96d8ec90d6904d3d/bce36a86-265b-42fd-acb8-2388b5898189.jfif?Expires=1838130251&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dDn1QA9Qi5ZG6~TsLL61gC7840vteHfdCFs8G5hEaCh5cGQ6y3BNSFe8rEfKKXlffpSB9q~5PrdUFB-PmnX-~PH65DLXdVglUXlKJEtc3sc094SU4ZUfNtn4a-OIHb1JJfsmwfqUXR0j9Avrk15EGzCT4rnn8XSQp4~W225aYQTF11oOEjcYsvd~dAVYTEFSdPARPucDYGkZEsrK6lv9vLCluHFsZ2NWVSauBPH4nVji~1rVCDuw3Wp8sqa7nSAS912SwMHsY1Dw2OEfed4zMzKj0ktCdziY8JTPgIdz8VQbPMWEObLU7Aw6Sg7OkI2P8giewbM6PNfcAnBQ3m383w__",
    tech: ["React", "Node.js", "OpenAi API", "Express"],
    github: "https://github.com/uraj1/PicMosaic",
    live: "https://picmosaic.netlify.app/ ",
    size: "large",
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
          <a
            href="https://github.com/uraj1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-700 text-white dark:bg-gray-800 dark:text-white hover:bg-purple-600 dark:hover:bg-gray-700 transition-colors font-medium shadow-md">
              <Github className="w-5 h-5" />
              Explore More Projects
            </button>
          </a>
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
                      className="flex items-center gap-2 text-sm cursor-pointer font-medium text-black  dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm cursor-pointer font-medium text-black dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
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
