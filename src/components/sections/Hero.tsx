"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import gsap from "gsap";
import Image from "next/image";

export function Hero() {
    const titleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-text-char", {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                duration: 1,
                ease: "power4.out",
                delay: 0.5
            });
        }, titleRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">

            {/* Animated Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-blue-950 to-purple-950">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Hero Content - Side by Side Layout */}
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10 w-full">
                <div className="flex justify-center mb-6">
                    <div className="inline-block px-4 py-2 text-center text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-md">
                        👋 Welcome to my development space
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">

                    {/* Left Side - Text Content */}
                    <motion.div
                        ref={titleRef}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center md:text-left order-2 md:order-1"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-[1.1] drop-shadow-sm">
                            <span className="block hero-text-char">Hi, I&apos;m</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 block hero-text-char">
                                Al Hasan Dhali
                            </span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-300 mb-6">
                            Full-Stack Developer
                        </h2>

                        <p className="text-neutral-300 text-lg md:text-xl max-w-xl mb-8 leading-relaxed mx-auto md:mx-0">
                            I build scalable, modern web applications from front-end to back-end with cutting-edge technologies.
                            Passionate about creating elegant solutions to complex problems.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 mb-8 justify-center md:justify-start">
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-3 rounded-full bg-neutral-900/50 border border-neutral-700 hover:border-blue-500 transition-all duration-300 hover:scale-110"
                            >
                                <FiGithub className="text-xl text-neutral-300 group-hover:text-blue-400 transition-colors" />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-3 rounded-full bg-neutral-900/50 border border-neutral-700 hover:border-blue-500 transition-all duration-300 hover:scale-110"
                            >
                                <FiLinkedin className="text-xl text-neutral-300 group-hover:text-blue-400 transition-colors" />
                            </a>
                            <a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-3 rounded-full bg-neutral-900/50 border border-neutral-700 hover:border-blue-500 transition-all duration-300 hover:scale-110"
                            >
                                <FiTwitter className="text-xl text-neutral-300 group-hover:text-blue-400 transition-colors" />
                            </a>
                        </div>

                        {/* Action Buttons - Centered on mobile, left-aligned on desktop */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href="#projects" className="relative inline-flex h-14 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-neutral-950">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#60A5FA_0%,#A78BFA_50%,#60A5FA_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-8 py-1 text-base font-medium text-white backdrop-blur-3xl hover:bg-neutral-900 transition-colors">
                                    View My Work
                                </span>
                            </a>

                            <a href="/resume.pdf" download className="inline-flex h-14 items-center justify-center rounded-full border-2 border-neutral-700 bg-neutral-900/50 backdrop-blur-sm px-8 font-medium text-neutral-100 transition-colors hover:bg-neutral-800 hover:border-blue-500">
                                Download Resume <FiDownload className="ml-2" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex justify-center md:justify-end order-1 md:order-2"
                    >
                        <div className="relative group">
                            {/* Animated gradient border */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                            {/* Main image container */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-neutral-900 shadow-2xl">
                                <Image
                                    src="/hero-profile-final.jpg"
                                    alt="Al Hasan Dhali"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>


                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
