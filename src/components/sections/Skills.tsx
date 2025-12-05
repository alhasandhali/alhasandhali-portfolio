"use client";

import { SKILLS_CATEGORIES } from "@/lib/data";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";

export function Skills() {
    return (
        <section id="skills" className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Technical Arsenal</h2>
                    <p className="text-neutral-500">Tools and technologies I use to build amazing web applications</p>
                </div>

                <div className="space-y-12">
                    {SKILLS_CATEGORIES.map((category, categoryIdx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIdx * 0.1 }}
                        >
                            <h3 className="text-2xl font-bold dark:text-white mb-6 text-center">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {category.skills.map((skill, idx) => (
                                    <SpotlightCard key={idx} className="bg-white dark:bg-neutral-900">
                                        <div className="relative z-10 h-full p-8 flex flex-col items-center justify-center gap-4 transition-transform duration-300 hover:scale-105">
                                            <div className="text-5xl drop-shadow-lg">{skill.icon}</div>
                                            <span className="font-semibold text-neutral-700 dark:text-neutral-300 text-center text-sm">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </SpotlightCard>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
