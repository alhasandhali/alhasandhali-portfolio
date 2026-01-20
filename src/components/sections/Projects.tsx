"use client";

import { FiGithub, FiExternalLink, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { PROJECTS } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export function Projects() {
    return (
        <section id="projects" className="py-24 px-4 overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-4">
                    <ScrollReveal>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                                Featured Projects
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 max-w-xl">
                                A collection of my recent work, ranging from web applications to complex ecosystem builds.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="flex gap-4 mt-8 md:mt-0">
                        <button className="swiper-prev-btn w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                            <FiChevronLeft size={24} />
                        </button>
                        <button className="swiper-next-btn w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                            <FiChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative group px-4">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, FreeMode]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            prevEl: ".swiper-prev-btn",
                            nextEl: ".swiper-next-btn",
                        }}
                        pagination={{
                            clickable: true,
                            el: ".swiper-custom-pagination",
                            renderBullet: (index, className) => {
                                return `<span class="${className} w-3 h-3 bg-neutral-300 dark:bg-neutral-700 rounded-full transition-all duration-300 inline-block mx-1 cursor-pointer"></span>`;
                            }
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        freeMode={true}
                        className="pb-16"
                    >
                        {PROJECTS.map((project, index) => (
                            <SwiperSlide key={project.id} className="h-auto">
                                <div className="group h-full flex flex-col bg-white dark:bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hoverShadow-blue">
                                    <div className="flex flex-col h-full w-full">
                                        {/* Project Image */}
                                        <div className="relative h-56 w-full overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-10 transition-opacity`} />
                                            {/* Tech Overlay */}
                                            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                                {project.tech.slice(0, 2).map((t) => (
                                                    <span key={t} className="px-2 py-1 text-[10px] uppercase bg-black/50 backdrop-blur-md text-white rounded border border-white/20 font-semibold">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="mb-4">
                                                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-blue-500 transition-colors duration-300 line-clamp-1" title={project.title}>
                                                    {project.title}
                                                </h3>
                                                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed line-clamp-3">
                                                    {project.desc}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tech.map((t) => (
                                                    <span key={t} className="px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 font-bold border border-neutral-200 dark:border-neutral-700">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800">
                                                <Link
                                                    href={`/projects/${project.id}`}
                                                    className="relative overflow-hidden group/btn flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        View Details <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                                                    </span>
                                                </Link>
                                                <div className="flex items-center justify-between gap-4 mt-2">
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                                        <FiGithub /> Code
                                                    </a>
                                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-blue-500 hover:underline transition-all">
                                                        Live Demo <FiExternalLink />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Pagination Container */}
                    <div className="swiper-custom-pagination flex justify-center items-center gap-1 mt-4"></div>
                </div>
            </div>
        </section>
    );
}
