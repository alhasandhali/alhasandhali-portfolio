"use client";

import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { PROJECTS } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Projects() {
    return (
        <section id="projects" className="py-12 px-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-neutral-900 dark:text-white">Featured Projects</h2>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ScrollReveal
                            key={project.id}
                            delay={index * 0.1}
                            className="h-full p-3"
                        >
                            <div className="group h-full flex flex-col bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                <div className="flex flex-col h-full w-full">
                                    {/* Project Image */}
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-10 transition-opacity`} />
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="mb-auto">
                                            <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white line-clamp-1" title={project.title}>{project.title}</h3>
                                            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                                {project.desc}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((t) => (
                                                <span key={t} className="px-2 py-1 text-[10px] uppercase tracking-wider rounded border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 font-semibold">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800">
                                            <Link
                                                href={`/projects/${project.id}`}
                                                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
                                            >
                                                View Details <FiArrowRight />
                                            </Link>
                                            <div className="flex items-center gap-4">
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition">
                                                    <FiGithub /> Code
                                                </a>
                                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition ml-auto">
                                                    Live Demo <FiExternalLink />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
