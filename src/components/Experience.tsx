import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Download } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Atos Syntel (Eviden)",
    period: "Jan. 2024 - April 2024",
    description:
      "Developed attendance tracking, time logging, user authentication, automated birthday emails, and data export using Angular, Spring Boot, and MySQL.",
    side: "right",
  },
  {
    title: "GSSOC’24 Contributor",
    company: "GSSOC",
    period: "April 2024 - Aug. 2024",
    description:
      "Enhanced code quality, added new features, and fixed 50+ bugs across projects, showcasing technical and collaborative expertise.",
    side: "left",
  },
  {
    title: "Secretary",
    company: "Colours (NIT KKR)",
    period: "July 2024 - Present",
    description:
      "Led Colours, a mental health management club, organizing initiatives and managing a team to promote awareness and support.",
    side: "right",
  },
  {
    title: "Design Head & Logistics Head",
    company: "TEDx NIT Kurukshetra",
    period: "April 2023 - March. 2025",
    description:
      "Led the creative direction and logistical planning for TEDx events, managing a team of 20+ designers and coordinating end-to-end event execution, ensuring impactful branding and smooth operations.",
    side: "left",
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/15fBoZFOotbIxH17hVR6n_fMGJXHEqAzb/view?usp=sharing";
    link.download = "Umang_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-white via-white to-gray-50 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-200"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Professional Experience
            </h2>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-800 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: exp.side === "left" ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex md:${
                    exp.side === "left" ? "justify-start" : "justify-end"
                  } justify-center w-full`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-purple-600 transform -translate-x-1/2 border-4 border-white dark:border-gray-900 z-10"></div>

                  <div
                    className={`w-full md:w-5/12 ${
                      exp.side === "right" ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl group transition-shadow relative overflow-hidden transform transition-transform hover:scale-105">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-purple-600 dark:text-purple-400">
                            {exp.company}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                            {exp.period}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300">
                            {exp.description}
                          </p>
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
