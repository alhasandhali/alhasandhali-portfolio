"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <div className="w-9 h-9 p-2 rounded-full border border-transparent" />
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="group relative p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <motion.div
                    className="absolute inset-0 flex items-center justify-center text-orange-500"
                    initial={false}
                    animate={{
                        scale: isDark ? 0 : 1,
                        rotate: isDark ? 180 : 0,
                        opacity: isDark ? 0 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <Sun className="w-5 h-5 fill-current" />
                </motion.div>

                <motion.div
                    className="absolute inset-0 flex items-center justify-center text-blue-500 dark:text-blue-400"
                    initial={false}
                    animate={{
                        scale: isDark ? 1 : 0,
                        rotate: isDark ? 0 : -180,
                        opacity: isDark ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <Moon className="w-5 h-5 fill-current" />
                </motion.div>
            </div>

            {/* Glow effect on hover */}
            <span className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-neutral-200 dark:group-hover:ring-neutral-700 transition-all duration-300" />
        </button>
    );
}
