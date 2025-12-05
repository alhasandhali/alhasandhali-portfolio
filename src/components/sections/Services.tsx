"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";
import { Code2, Layout, Database, Smartphone, Globe, Server } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive, interactive, and pixel-perfect user interfaces using React, Next.js, and Tailwind CSS.",
    icon: <Layout className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Backend Development",
    description: "Designing robust and scalable server-side applications and APIs with Node.js, Express, and databases.",
    icon: <Server className="w-10 h-10 text-purple-500" />,
  },
  {
    title: "Full Stack Solutions",
    description: "End-to-end web application development, handling everything from database design to frontend deployment.",
    icon: <Database className="w-10 h-10 text-green-500" />,
  },
  {
    title: "UI/UX Implementation",
    description: "Translating design mockups into functional, accessible, and performant web experiences.",
    icon: <Code2 className="w-10 h-10 text-pink-500" />,
  },
];

export function Services() {
  return (
    <section id="service" className="py-16 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 dark:text-white"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-500 max-w-2xl mx-auto"
          >
            I provide comprehensive web development solutions tailored to your needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SpotlightCard className="h-full bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                <div className="p-8 flex flex-col items-center text-center h-full">
                  <div className="mb-6 p-4 bg-white dark:bg-neutral-800 rounded-full shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Full Stack Developer Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <SpotlightCard className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 border-blue-200 dark:border-blue-800">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  <Globe className="w-16 h-16" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold dark:text-white mb-4">
                  Full Stack Developer
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed mb-6">
                  With expertise in both frontend and backend technologies, I bridge the gap between design and technical implementation. I build scalable, secure, and high-performance applications that drive business growth.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    Problem Solver
                  </span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                    Clean Code
                  </span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    Fast Learner
                  </span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
