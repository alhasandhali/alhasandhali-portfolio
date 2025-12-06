"use client";

import { SKILLS_CATEGORIES } from "@/lib/data";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Skills() {
    return (
        <section id="skills" className="py-12 px-4 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%" className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Technical Arsenal</h2>
                    <p className="text-neutral-500">Tools and technologies I use to build amazing web applications</p>
                </ScrollReveal>

                <div className="space-y-12">
                    {SKILLS_CATEGORIES.map((category, categoryIdx) => (
                        <ScrollReveal
                            key={category.category}
                            delay={categoryIdx * 0.1}
                            width="100%"
                        >
                            <h3 className="text-2xl font-bold dark:text-white mb-6 text-center">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx}>
                                        <SpotlightCard className="h-full bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
                                            <div className="relative z-10 h-full p-8 flex flex-col items-center justify-center gap-4 transition-transform duration-300 hover:scale-105">
                                                <div className="text-5xl drop-shadow-lg">{skill.icon}</div>
                                                <span className="font-semibold text-neutral-700 dark:text-neutral-300 text-center text-sm">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </SpotlightCard>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
