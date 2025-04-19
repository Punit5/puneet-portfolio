import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Java", "Spring Boot", "AWS", "SQL", "Docker", "Kafka",
  "React", "PostgreSQL", "MongoDB", "Git", "Linux",
  "JavaScript", "TypeScript", "Next.js", "Node.js", "TensorFlow", "PyTorch", "OpenAI API"
];

const certifications = [
  {
    name: "Generative AI",
    issuer: "Databricks",
    date: "Apr 2025",
    image: "/certifications/databricks.png"
  },
  {
    name: "Kafka Developer Skills",
    issuer: "Confluent",
    date: "Jul 2021",
    image: "/certifications/confluent.png"
  },
  {
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    date: "Jul 2021",
    image: "/certifications/microsoft.png"
  },
  {
    name: "Scrum Master",
    issuer: "LinkedIn",
    date: "Mar 2021",
    image: "/certifications/linkedin.png"
  },
  {
    name: "IBM DB2 Certified",
    issuer: "IBM",
    date: "N/A",
    image: "/certifications/ibm.png"
  }
];

const projects = [
  {
    title: "Cloud Migration",
    stack: ["AWS", "GCP", "Docker"],
    desc: "Migrated enterprise applications to the cloud using AWS & GCP."
  },
  {
    title: "Spring Boot APIs",
    stack: ["Spring Boot", "PostgreSQL"],
    desc: "Built scalable REST APIs with high performance and test coverage."
  },
  {
    title: "Multi-cloud Support",
    stack: ["AWS", "Azure", "Kubernetes"],
    desc: "Enabled seamless multi-cloud deployment for Samsung Knox."
  }
];

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <nav className="flex justify-between items-center p-4 shadow">
        <div className="text-xl font-bold">Puneet Dimri</div>
        <div className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#certs" className="hover:underline">Certifications</a>
          <a href="#blog" className="hover:underline">Blog</a> {/* New Blog Link */}
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      <header className="p-8 text-center bg-gray-100">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-6">
          <img
            src="/profile.jpg" // Replace with the actual path to your image
            alt="Puneet Dimri"
            className="w-32 h-32 rounded-full shadow-md mb-4 md:mb-0"
          />
          <div>
            <motion.h1
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm Puneet Dimri
            </motion.h1>
            <motion.p
              className="mt-2 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Senior Software Developer | Java | Spring Boot | AWS
            </motion.p>
            <motion.div
              className="mt-4 space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a href="/resume.pdf" className="px-4 py-2 bg-black text-white rounded">Download Resume</a>
              <a href="https://www.linkedin.com/in/punitdimrii" className="px-4 py-2 border rounded">LinkedIn</a>
            </motion.div>
          </div>
        </div>
      </header>

      <motion.section
        id="about"
        className="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-2xl font-semibold mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I'm a Senior Software Developer with experience at Everbridge, Samsung, and Northland Properties.
          I build scalable backend systems using Java, Spring Boot, and AWS. Strong in cloud migration and app modernization.
        </motion.p>
      </motion.section>

      <motion.section
        id="experience"
        className="p-8 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-lg">
            For detailed experience, check out my 
            <a href="/resume.pdf" className="text-blue-600 underline ml-1" target="_blank" rel="noopener noreferrer">
              Resume
            </a>.
          </p>
          <ul className="mt-6 space-y-4">
            <motion.li
              className="border p-4 rounded shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-semibold text-lg">Everbridge</h3>
              <p className="text-sm text-gray-600">Senior Software Developer (2020 - Present)</p>
              <p className="mt-2 text-gray-700">
                Built scalable backend systems using Java, Spring Boot, and AWS. Led cloud migration projects and improved system performance.
              </p>
            </motion.li>
            <motion.li
              className="border p-4 rounded shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-semibold text-lg">Samsung</h3>
              <p className="text-sm text-gray-600">Software Engineer (2017 - 2020)</p>
              <p className="mt-2 text-gray-700">
                Developed multi-cloud deployment solutions and contributed to Samsung Knox platform enhancements.
              </p>
            </motion.li>
            <motion.li
              className="border p-4 rounded shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-semibold text-lg">Northland Properties</h3>
              <p className="text-sm text-gray-600">Software Developer (2015 - 2017)</p>
              <p className="mt-2 text-gray-700">
                Designed and implemented enterprise applications, focusing on database optimization and system reliability.
              </p>
            </motion.li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="p-8 bg-gray-50"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Programming Languages */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
            <ul className="space-y-2">
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">Java</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">JavaScript</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">TypeScript</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">Python</li>
            </ul>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
            <ul className="space-y-2">
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">React</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">Next.js</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">Node.js</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">Spring Boot</li>
            </ul>
          </motion.div>

          {/* AI & Machine Learning */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
            <ul className="space-y-2">
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">TensorFlow</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">PyTorch</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">OpenAI API</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">ChatGPT Integration</li>
            </ul>
          </motion.div>

          {/* JavaScript Ecosystem */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">JavaScript Ecosystem</h3>
            <ul className="space-y-2">
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">ES6+</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">Redux</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">Webpack</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">Babel</li>
            </ul>
          </motion.div>

          {/* React Ecosystem */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">React Ecosystem</h3>
            <ul className="space-y-2">
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">React Router</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">React Query</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">Material-UI</li>
              <li className="bg-gray-100 px-3 py-1 rounded-full text-sm inline-block">Styled Components</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <section id="projects" className="p-8 max-w-5xl mx-auto">
        <motion.h2
          className="text-2xl font-semibold mb-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((proj) => (
            <motion.div
              key={proj.title}
              className="bg-white p-6 rounded-lg shadow-md min-h-[200px] flex flex-col justify-between"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-semibold text-lg">{proj.title}</h3>
              <p className="text-sm text-gray-600 mt-2 mb-2">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.stack.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="certs" className="p-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map(cert => (
            <motion.div
              key={cert.name}
              className="bg-white p-6 border rounded-lg shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }} // Add hover animation
              transition={{ duration: 0.3 }} // Smooth transition
            >
              <div className="flex items-center mb-4">
                <img
                  src={cert.image}
                  alt={`${cert.name} Logo`}
                  className="w-16 h-16 mr-4" // Square image
                />
                <div>
                  <h3 className="font-semibold text-lg">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">Issued: {cert.date}</p>
            </motion.div>
          ))}
        </div>
      </section>

          {/* Blog Section */}
      <section id="blog" className="p-8 bg-gray-50">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Blog
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Blog 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">My Experience Migrating Enterprise Apps to AWS</h3>
            <p className="text-sm text-gray-600 mb-4">
            Lessons I learned while moving a large Java backend to AWS + EKS
            tags: java, aws, springboot, cloud, docker, devops
            </p>
            <a
              href="https://dev.to/punit_dimri_5dceeb756bd28/my-experience-migrating-enterprise-apps-to-aws-5ik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Read More →
            </a>
          </motion.div>

          {/* Blog 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">Getting Started with TensorFlow</h3>
            <p className="text-sm text-gray-600 mb-4">
              Learn how to build and train machine learning models using TensorFlow.
            </p>
            <a
              href="https://example.com/tensorflow-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Read More →
            </a>
          </motion.div>

          {/* Blog 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">Mastering JavaScript ES6+</h3>
            <p className="text-sm text-gray-600 mb-4">
              Explore the latest features of JavaScript ES6+ and how to use them effectively.
            </p>
            <a
              href="https://example.com/javascript-es6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Read More →
            </a>
          </motion.div>
        </motion.div>
      </section>

  

      <section id="contact" className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p>📧 <a href="mailto:punit.dimri@gmail.com" className="underline">punit.dimri@gmail.com</a></p>
        <p>🔗 <a href="https://www.linkedin.com/in/punitdimrii" className="underline">LinkedIn</a></p>
      </section>

      <footer className="text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Puneet Dimri. All rights reserved.
      </footer>
    </div>
  );
}
