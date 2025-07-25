import { useState } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiExternalLink,
} from "react-icons/fi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaReact, FaNodeJs, FaPython, FaJs } from "react-icons/fa";
import { SiDocker, SiOpenai, SiC } from "react-icons/si";

const App = () => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            KS
          </a>

          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#home"
              className="block text-gray-300 hover:text-purple-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-300 hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="block text-gray-300 hover:text-purple-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block text-gray-300 hover:text-purple-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block text-gray-300 hover:text-purple-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden pt-20 min-w-screen"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-900/20 to-gray-950 z-0" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 border border-purple-500/30">
                Full Stack Developer & AI Enthusiast
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Hi, I'm Khan Shoaib
              </span>
              <br />
              <span className="text-gray-300">
                Building AI-Powered Web Solutions
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative w-full max-w-xl aspect-square">
              <Spline
                className="w-full h-full"
                scene="https://prod.spline.design/jq0UFoyvxFUnVZWP/scene.splinecode"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400">
            I'm a passionate 3rd-year IT student specializing in full-stack
            development and AI integration, dedicated to building innovative
            digital solutions that bridge technology and user needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-200">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-purple-600/20 p-2 rounded-lg mr-4">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-400">
                  Develop full-stack applications using modern frameworks like
                  React, Next.js, and Node.js
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-600/20 p-2 rounded-lg mr-4">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-400">
                  Integrate AI capabilities using OpenAI, LangChain, and other
                  cutting-edge technologies
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-600/20 p-2 rounded-lg mr-4">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-400">
                  Design responsive and intuitive user interfaces with attention
                  to accessibility
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-600/20 p-2 rounded-lg mr-4">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-400">
                  Architect scalable backend systems with proper database design
                  and API development
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-200">
              My Approach
            </h3>
            <p className="text-gray-400 mb-6">
              I combine technical expertise with creative problem-solving to
              deliver solutions that are not just functional but delightful to
              use. My development process emphasizes clean code, performance
              optimization, and continuous learning.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all">
                <h4 className="text-purple-400 font-bold mb-2">12+</h4>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "KromaApps",
      period: "Jan 2024 – Present",
      description: [
        "Led the end-to-end development of Stitch & Style, a full-stack e-commerce platform built for fashion-based product selling with dedicated dashboards for customers, designers, and admins.",
        "Designed and developed the frontend using React.js, and built the backend using Node.js, Express.js, and MongoDB.",
        "Integrated Stripe & Razorpay for secure payment processing and implemented authentication, role-based access control, and real-time order tracking.",
        "Managed project planning, deployment, and team coordination under the KromaApps initiative.",
        "Deployed the application using Vercel, Render, and MongoDB Atlas with a strong focus on performance and responsive design.",
      ],
    },
    {
      role: "Joint Head – Technical Team",
      company: "ACM Student Chapter",
      period: "July 2025 – Present",
      description: [
        "Led technical initiatives and co-managed internal projects and competitions within the chapter.",
        "Contributed to the development and UI enhancement of MHSSCE College Website, improving user experience and interface consistency.",
        "Collaborated with internal teams for event promotions, and seamless execution of tech events.",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution:
        "M. H. Saboo Siddik College of Engineering, University of Mumbai",
      period: "Aug 2023 – Present (Expected June 2027)",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400">
            My professional journey and academic background that shaped my
            skills and knowledge.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-200 flex items-center">
              <span className="bg-purple-600/20 p-2 rounded-lg mr-4">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              Work Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all relative"
                >
                  <div className="absolute -left-3 top-6 h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
                  <div className="absolute -left-2 top-7 h-4 w-4 rounded-full bg-gray-950"></div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-200">
                      {exp.role}
                    </h4>
                    <div className="flex items-center text-gray-400 mb-4">
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <ul className="space-y-2 text-gray-400">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="text-purple-400 mr-2">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-200 flex items-center">
              <span className="bg-purple-600/20 p-2 rounded-lg mr-4">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </span>
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all relative"
                >
                  <div className="absolute -left-3 top-6 h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
                  <div className="absolute -left-2 top-7 h-4 w-4 rounded-full bg-gray-950"></div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-200">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center text-gray-400 mb-4">
                      <span>{edu.institution}</span>
                    </div>
                    <div className="text-gray-400">
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "CodeSaga – AI Coding Platform",
      description:
        "A LeetCode-style platform with AI-powered code review and real-time discussions.",
      technologies: [
        "React.js",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Docker",
        "Socket.IO",
        "Razorpay",
        "OpenAI",
      ],
      year: "June 2025",
      githubLink: "https://github.com/kshxaib/CodeSaga",
      liveLink: "https://www.linkedin.com/posts/shoaib-khan-7308932a9_codesaga-buildinpublic-reactjs-activity-7341469436370944001-QqnK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEpY4VQB_bW4L4HyZP7ebbpZbCbcW42DS24",
    },
    {
      title: "TalentTribe – Job Portal",
      description: "Job and internship portal with AI-powered matching.",
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "Gemini"],
      year: "2024",
      githubLink: "https://github.com/KromaApps/TalentTribe",
      liveLink: "https://www.linkedin.com/posts/mohammed-afjal-shaikh_hackathon-generativeai-jobportal-ugcPost-7243634107044249600-hEWG?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEpY4VQB_bW4L4HyZP7ebbpZbCbcW42DS24",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400">
            A selection of projects that showcase my skills and capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-200 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-purple-400">
                        {project.year}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-400 transition-colors"
                          aria-label="GitHub"
                        >
                          <FiGithub className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-400 transition-colors"
                          aria-label="Live Demo"
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-900/50 text-gray-400 px-2 py-1 rounded border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-800/50 hover:text-white transition-all duration-300"
          >
            View More Projects
            <HiOutlineArrowNarrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skillsCategories = [
    {
      title: "Languages & Web",
      skills: ["Python", "JavaScript", "C", "HTML/CSS", "REST APIs"],
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Angular", "Tailwind CSS", "Redux"],
      icon: <FaReact className="text-blue-400" />,
    },
    {
      title: "Backend & DB",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"],
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      title: "AI & ML",
      skills: ["LangChain", "OpenAI", "HuggingFace", "RAG", "Vector DBs"],
      icon: <SiOpenai className="text-purple-400" />,
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "AWS", "Postman", "CI/CD"],
      icon: <SiDocker className="text-blue-300" />,
    },
    {
      title: "Data Structures & Algorithms",
      skills: [
        "Problem Solving",
        "Optimization",
        "System Design",
        "Competitive Programming",
      ],
      icon: <SiC className="text-blue-500" />,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-gray-900/50 p-3 rounded-full mb-4 border border-gray-700">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-200 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-gray-400 text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-800/50 p-8 rounded-xl border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-center text-gray-200 mb-6">
            AI Specializations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Retrieval-Augmented Generation",
              "AI Agent Orchestration",
              "Vector Databases",
              "LLM Fine-tuning",
              "Prompt Engineering",
              "AI Model Guardrails",
              "Human-in-the-loop Systems",
              "Context Management",
            ].map((skill, i) => (
              <div key={i} className="flex items-center">
                <span className="text-purple-400 mr-2">▹</span>
                <span className="text-gray-400 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6 text-purple-400" />,
      title: "Email",
      value: "khanshoaibishtiyak@gmail.com",
      link: "mailto:khanshoaibishtiyak@gmail.com",
    },
    {
      icon: <FiPhone className="w-6 h-6 text-purple-400" />,
      title: "Phone",
      value: "+91 9324649967",
      link: "https://wa.me/919324649967",
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-purple-400" />,
      title: "Location",
      value: "Mumbai, India",
      link: "https://maps.google.com/?q=Mumbai,India",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-200">
              Contact Information
            </h3>
            <p className="text-gray-400">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="bg-purple-600/20 p-2 rounded-lg">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">
                      {method.title}
                    </h4>
                    <p className="text-gray-400">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a
              href="#home"
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              Khan Shoaib
            </a>
            <p className="text-gray-500 text-sm mt-1">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:khanshoaibishtiyak@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;
