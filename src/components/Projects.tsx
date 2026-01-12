import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, ArrowRight, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";
import malwarePreventionImg from "figma:asset/88dd6b4d57816066274655fa80d717fbf2bb96dd.png";
import northstarOnboardingImg from "figma:asset/fd3e339f792f08cc3f189f6e2fe6748ba5bd07f3.png";
import vcfNetworkImg from "figma:asset/501379d39119b51053303c522aca3c66a3cc264a.png";
import xenithImg from "figma:asset/c914e17c43c35babaf274bd6f480bd6b3bc27d2c.png";
import bianzhongImg from "figma:asset/d0a5f68029ef17e07b8dca60a474da05bd03b8d4.png";
import zovaImg from "figma:asset/5c3a5b271ecb9a4a5bd9c13325df4aa716115163.png";
import storyweaverImg from "figma:asset/97aed2aec75db82e05a134b3b6931277818f74c9.png";
import contextualInquiryImg from "figma:asset/fe729219d29d839dd92bebb77136917a9758ee64.png";

const projects = [
  {
    id: "malware-prevention",
    title: "Malware Prevention Dashboard",
    description: "Real-time malware detection and prevention system with file inspection and threat analysis.",
    imageUrl: malwarePreventionImg,
    tags: ["React", "Security", "Analytics", "Real-time"],
    liveUrl: "#",
    githubUrl: "#",
    hasDetailPage: true,
  },
  {
    id: "northstar-onboarding",
    title: "Northstar Onboarding",
    description: "North Star onboarding experience with step-by-step prerequisites and VMware Cloud Gateway configuration.",
    imageUrl: northstarOnboardingImg,
    tags: ["React", "Onboarding", "VMware", "Cloud"],
    liveUrl: "#",
    githubUrl: "#",
    hasDetailPage: true,
  },
  {
    id: "vcf-network",
    title: "VCF Network Operations",
    description: "A full-featured online shopping platform with payment integration and admin dashboard.",
    imageUrl: vcfNetworkImg,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    hasDetailPage: true,
    isPasswordProtected: true,
  },
  {
    id: "xenith-website",
    title: "Xenith Website Redesign",
    description: "Collaborative task management tool with real-time updates and team features.",
    imageUrl: xenithImg,
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    hasDetailPage: true,
  },
  {
    id: "bianzhong",
    title: "Bianzhong - Future Museum Experience",
    description: "Interactive museum experience design.",
    imageUrl: bianzhongImg,
    tags: ["UX Design", "Interactive", "Museum"],
    liveUrl: "#",
    githubUrl: "#",
    hasDetailPage: true,
  },
  {
    id: "zova",
    title: "Zova - One-Handed Product Design",
    description: "Innovative one-handed product design for improved accessibility.",
    imageUrl: zovaImg,
    tags: ["Product Design", "Accessibility", "Innovation"],
    liveUrl: "#",
    githubUrl: "#",
    hasDetailPage: true,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#102F56] to-[#1a4d7a] dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent" style={{ lineHeight: "1.4" }}>
              Featured Projects
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
              Explore my latest work in product design and user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                {project.hasDetailPage ? (
                  <Link to={`/project/${project.id}`} className="block">
                    <motion.div
                      className="cursor-pointer transition-all duration-300"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                        {project.isPasswordProtected && (
                          <div className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2 shadow-lg" style={{ borderRadius: '8px' }}>
                            <Lock className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">Protected</span>
                          </div>
                        )}
                        {project.imageUrl ? (
                          <ImageWithFallback
                            src={project.imageUrl}
                            alt={project.title}
                            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 dark:brightness-90 dark:hover:brightness-100 ${project.imageClassName || ""}`}
                          />
                        ) : typeof project.image === 'string' ? (
                          <ImageWithFallback
                            src={`https://source.unsplash.com/800x600/?${project.image}`}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 dark:brightness-90 dark:hover:brightness-100"
                          />
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 dark:brightness-90 dark:hover:brightness-100"
                          />
                        )}
                      </div>
                      <h3 className="text-xl mt-4 text-center text-gray-700 dark:text-gray-200">
                        {project.title}
                      </h3>
                    </motion.div>
                  </Link>
                ) : (
                  <motion.div
                    className="transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                      {project.imageUrl ? (
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 dark:brightness-90 dark:hover:brightness-100"
                        />
                      ) : typeof project.image === 'string' ? (
                        <ImageWithFallback
                          src={`https://source.unsplash.com/800x600/?${project.image}`}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 dark:brightness-90 dark:hover:brightness-100"
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 dark:brightness-90 dark:hover:brightness-100"
                        />
                      )}
                    </div>
                    <h3 className="text-xl mt-4 text-center text-gray-700 dark:text-gray-200">
                      {project.title}
                    </h3>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}