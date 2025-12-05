"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import AnimatedCursor from "@/components/AnimatedCursor/AnimatedCursor";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="relative bg-white dark:bg-black transition-colors duration-500 selection:bg-blue-500/30 selection:text-blue-500">
      <AnimatedCursor />
      <ScrollToTop />

      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 to-purple-500 origin-left z-50" style={{ scaleX }} />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}