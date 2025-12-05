"use client";

import { useParams, useRouter } from "next/navigation";
import { PROJECTS } from "@/lib/data";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowLeft, FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailPage() {
    const params = useParams();
    const router = useRouter();
    const projectId = parseInt(params.id as string);
    const project = PROJECTS.find(p => p.id === projectId);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold dark:text-white mb-4">Project Not Found</h1>
                    <Link href="/#projects" className="text-blue-500 hover:underline">
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black pt-24 pb-16 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                        <FiArrowLeft /> Back to Projects
                    </Link>
                </motion.div>

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold mb-4`}>
                        Featured Project
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
                        {project.title}
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
                        {project.desc}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
                        >
                            <FiExternalLink /> Live Demo
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-500 text-neutral-900 dark:text-white font-medium transition-colors"
                        >
                            <FiGithub /> View Code
                        </a>
                    </div>
                </motion.div>

                {/* Project Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl"
                >
                    <div className="relative w-full h-[400px]">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Technology Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold dark:text-white mb-4">Technology Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Detailed Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-12 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800"
                >
                    <h2 className="text-2xl font-bold dark:text-white mb-4">About This Project</h2>
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg">
                        {project.detailedDesc}
                    </p>
                </motion.div>

                {/* Challenges Faced */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                            <FiCheckCircle className="text-2xl" />
                        </div>
                        <h2 className="text-2xl font-bold dark:text-white">Challenges Faced</h2>
                    </div>
                    <div className="grid gap-4">
                        {project.challenges.map((challenge, index) => (
                            <div
                                key={index}
                                className="flex gap-4 p-4 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    {challenge}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Future Improvements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                            <FiTrendingUp className="text-2xl" />
                        </div>
                        <h2 className="text-2xl font-bold dark:text-white">Future Improvements</h2>
                    </div>
                    <div className="grid gap-4">
                        {project.improvements.map((improvement, index) => (
                            <div
                                key={index}
                                className="flex gap-4 p-4 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                                    <FiTrendingUp />
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                    {improvement}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white"
                >
                    <h3 className="text-2xl font-bold mb-4">Interested in this project?</h3>
                    <p className="mb-6 text-blue-100">
                        Check out the live demo or explore the source code on GitHub
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
                        >
                            <FiExternalLink /> Visit Live Site
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
                        >
                            <FiGithub /> View on GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
