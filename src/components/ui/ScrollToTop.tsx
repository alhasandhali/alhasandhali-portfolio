"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();

    // Smooth spring animation for the progress circle
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.5,
                pointerEvents: isVisible ? "auto" : "none"
            }}
            transition={{ duration: 0.3 }}
        >
            <button
                onClick={scrollToTop}
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-neutral-900 shadow-lg hover:shadow-xl transition-shadow group"
                aria-label="Scroll to top"
            >
                {/* Progress Circle Background */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-neutral-200 dark:text-neutral-800"
                    />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-blue-500"
                        style={{ pathLength: scaleX }}
                    />
                </svg>

                {/* Arrow Icon */}
                <FiArrowUp className="text-xl text-neutral-600 dark:text-neutral-300 group-hover:text-blue-500 transition-colors" />
            </button>
        </motion.div>
    );
}
