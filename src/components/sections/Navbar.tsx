"use client";

import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = ['About', 'Skills', 'Service', 'Projects', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.toLowerCase());
            const scrollPosition = window.scrollY + 100; // Offset for better accuracy
            let current = "";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        current = section;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navItems]);

    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    if (!mounted) {
        return null;
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed w-full z-40 top-0 backdrop-blur-xl bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200/50 dark:border-white/5 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <h1 className="text-2xl font-bold tracking-tighter flex items-center gap-1 dark:text-white">
                            <a href="/">Al Hasan D<span className="text-blue-500 text-3xl">.</span></a>
                        </h1>

                        <div className="flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`relative hidden md:block text-sm font-medium transition-colors ${activeSection === item.toLowerCase()
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-300"
                                        }`}
                                >
                                    {item}
                                    {activeSection === item.toLowerCase() && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            ))}

                            <ThemeToggle />

                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
                                aria-label="Toggle menu"
                            >
                                <FiMenu />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {
                    mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-30 md:hidden"
                        >
                            <div
                                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                                onClick={() => setMobileMenuOpen(false)}
                            />
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ duration: 0.3 }}
                                className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 shadow-2xl"
                            >
                                <div className="flex flex-col p-6 pt-20 space-y-6">
                                    {navItems.map((item, index) => (
                                        <motion.a
                                            key={item}
                                            href={`#${item.toLowerCase()}`}
                                            onClick={handleNavClick}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`text-lg font-medium transition-colors ${activeSection === item.toLowerCase()
                                                ? "text-blue-500 dark:text-blue-400"
                                                : "text-neutral-900 dark:text-neutral-100 hover:text-blue-500 dark:hover:text-blue-400"
                                                }`}
                                        >
                                            {item}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    );
}
