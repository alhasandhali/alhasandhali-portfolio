"use client";

import { TIMELINE } from "@/lib/data";
import { FiCode, FiHeart, FiTarget } from "react-icons/fi";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="py-12 px-4 relative bg-neutral-50 dark:bg-neutral-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">About Me</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Get to know me better - my journey, passions, and what drives me as a developer
                    </p>
                </ScrollReveal>

                {/* Professional Introduction */}
                <ScrollReveal width="100%" delay={0.2} className="mb-16 bg-white dark:bg-neutral-900 rounded-2xl p-8 md:p-12 shadow-lg border border-neutral-200 dark:border-neutral-800">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 text-center md:text-left">
                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                            <FiCode className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Professional Overview</h3>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                                I&apos;m a passionate Full-Stack Developer with expertise in building modern, scalable web applications.
                                My journey in software development combines strong technical skills with a creative approach to problem-solving.
                            </p>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                Currently pursuing my BSc in Computer Science & Engineering at Southeast University, I specialize in
                                the MERN stack, Next.js, and Spring Boot. I love transforming complex problems into elegant,
                                user-friendly solutions that make a real impact.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Programming Journey & Work Preferences */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <ScrollReveal delay={0.3} className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-800">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 text-center md:text-left">
                            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500">
                                <FiTarget className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">My Journey</h3>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                                    My programming journey began with curiosity about how websites work. What started as
                                    tinkering with HTML and CSS evolved into a deep passion for full-stack development.
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    I&apos;ve built multiple production-ready applications, mastered modern frameworks, and
                                    continuously push myself to learn emerging technologies. Every project is an opportunity
                                    to grow and create something meaningful.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4} className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-800">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 text-center md:text-left">
                            <div className="p-3 rounded-lg bg-green-500/10 text-green-500">
                                <FiHeart className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Work & Interests</h3>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                                    <strong className="text-neutral-900 dark:text-white">Work Style:</strong> I thrive in collaborative
                                    environments and enjoy pair programming. I believe in clean code, thorough documentation,
                                    and agile methodologies.
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    <strong className="text-neutral-900 dark:text-white">Beyond Code:</strong> When I&apos;m not coding,
                                    you&apos;ll find me exploring new tech trends, contributing to open source, reading tech blogs,
                                    or enjoying photography and gaming.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal width="100%" className="mb-8">
                    <h3 className="text-3xl font-bold mb-12 text-center text-neutral-900 dark:text-white">My Journey Timeline</h3>
                </ScrollReveal>

                <div className="relative">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 md:-translate-x-1/2" />

                    <div className="space-y-20">
                        {TIMELINE.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="flex-1 md:text-right"></div>

                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-black transform -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />

                                <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors relative">
                                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{item.title}</h3>
                                        <div className={`flex items-center gap-2 text-blue-500 font-mono text-sm mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                            <span>{item.year}</span>
                                        </div>
                                        <p className={`text-neutral-500 dark:text-neutral-400 text-sm font-medium mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>{item.place}</p>
                                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
