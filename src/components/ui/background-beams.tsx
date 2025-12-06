"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 bg-white dark:bg-neutral-950 transition-colors duration-300 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
                className
            )}
        >
            <div className="absolute inset-0 bg-fixed bg-white dark:bg-neutral-950 transition-colors duration-300 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="absolute h-full w-full bg-white dark:bg-neutral-950 transition-colors duration-300 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="absolute inset-0 bg-white dark:bg-neutral-950 transition-colors duration-300 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 h-full w-full"
            >
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: Math.random() * 400 - 200,
                            y: Math.random() * 400 - 200,
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            x: Math.random() * 400 - 200,
                            y: Math.random() * 400 - 200,
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 5,
                        }}
                        className="absolute h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};
