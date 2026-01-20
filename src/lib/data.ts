import {
    SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb,
    SiJavascript, SiTypescript, SiFirebase, SiPostgresql, SiPython,
    SiSpringboot, SiBootstrap, SiExpress, SiGit, SiMysql, SiGithub, SiCplusplus
} from "react-icons/si";
import { FaJava, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import React from "react";

export const SKILLS_CATEGORIES = [
    {
        category: "Frontend",
        skills: [
            { name: "JavaScript", icon: React.createElement(SiJavascript, { className: "text-yellow-400" }) },
            { name: "TypeScript", icon: React.createElement(SiTypescript, { className: "text-blue-500" }) },
            { name: "React", icon: React.createElement(SiReact, { className: "text-cyan-400" }) },
            { name: "Next.js", icon: React.createElement(SiNextdotjs, { className: "dark:text-white text-black" }) },
            { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss, { className: "text-teal-400" }) },
            { name: "Bootstrap", icon: React.createElement(SiBootstrap, { className: "text-purple-600" }) },
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Java", icon: React.createElement(FaJava, { className: "text-red-500" }) },
            { name: "C++", icon: React.createElement(SiCplusplus, { className: "text-blue-600" }) },
            { name: "Node.js", icon: React.createElement(SiNodedotjs, { className: "text-green-500" }) },
            { name: "Spring Boot", icon: React.createElement(SiSpringboot, { className: "text-green-400" }) },
            { name: "Express.js", icon: React.createElement(SiExpress, { className: "dark:text-white text-black" }) },
            { name: "Python", icon: React.createElement(SiPython, { className: "text-blue-300" }) },
        ]
    },
    {
        category: "Database & Tools",
        skills: [
            { name: "MongoDB", icon: React.createElement(SiMongodb, { className: "text-green-600" }) },
            { name: "MySQL", icon: React.createElement(SiMysql, { className: "text-blue-500" }) },
            { name: "PostgreSQL", icon: React.createElement(SiPostgresql, { className: "text-blue-400" }) },
            { name: "Firebase", icon: React.createElement(SiFirebase, { className: "text-orange-500" }) },
            { name: "Git", icon: React.createElement(SiGit, { className: "text-orange-600" }) },
            { name: "GitHub", icon: React.createElement(SiGithub, { className: "dark:text-white text-black" }) },
        ]
    }
];

export const PROJECTS = [
    {
        id: 1,
        title: "BookCourier - Modern Bookstore Ecosystem",
        desc: "A premium full-stack bookstore platform featuring role-based access control, secure payments, and real-time inventory management.",
        detailedDesc: "BookCourier is a comprehensive MERN-stack application that connects readers, librarians, and administrators. It features a polished frontend with dynamic book discovery, a robust backend with secure JWT authentication, and a detailed dashboard for managing inventory, tracking orders, and analyzing platform-wide statistics.",
        tech: ["React 19", "Node.js", "MongoDB", "Tailwind CSS 4", "Firebase Auth"],
        image: "/projects/book-courier-dark.png",
        live: "https://book-courier.vercel.app/",
        github: "https://github.com/alhasandhali/book-courier-client-side.git",
        gradient: "from-blue-600 to-indigo-500",
        challenges: [
            "Implementing secure Role-Based Access Control (RBAC) for Admins, Librarians, and Users",
            "Managing complex state for the unified checkout and inventory synchronization",
            "Designing a relational-style data model within a NoSQL MongoDB environment",
            "Handling multi-step payment processing and automatic stock reduction logic"
        ],
        improvements: [
            "Integrate a PDF viewer for digital book previews or E-book reading",
            "Implement a real-time chat system between readers and librarians",
            "Add an AI-powered recommendation engine based on user reading history",
            "Develop a mobile application using React Native for on-the-go browsing"
        ]
    },
    {
        id: 2,
        title: "TechTrove Product Management",
        desc: "A responsive Next.js product management system with secure authentication (NextAuth) and full CRUD functionality.",
        detailedDesc: "TechTrove is a comprehensive product management platform built with Next.js and Express.js. It features secure user authentication, real-time product updates, and an intuitive admin dashboard for managing inventory. The application implements best practices for security and performance optimization.",
        tech: ["Next.js", "Tailwind CSS", "NextAuth", "Express.js", "MongoDB"],
        image: "/projects/techtrove.png",
        live: "https://techtrove-ahd.vercel.app/",
        github: "https://github.com/alhasandhali/mini-ecommerce-client-side",
        gradient: "from-blue-500 to-cyan-400",
        challenges: [
            "Implementing secure authentication with NextAuth and session management",
            "Optimizing database queries for large product catalogs",
            "Creating a responsive admin dashboard with real-time updates"
        ],
        improvements: [
            "Add advanced search and filtering capabilities",
            "Implement product analytics and reporting dashboard",
            "Add multi-vendor support and inventory tracking",
            "Integrate payment gateway for e-commerce functionality"
        ]
    },
    {
        id: 3,
        title: "PlateShare Donation Platform",
        desc: "MERN-based platform connecting donors and recipients with dynamic management and Firebase authentication.",
        detailedDesc: "PlateShare is a social impact platform that connects food donors with those in need. Built with the MERN stack, it features real-time donation tracking, user profiles, and an intelligent matching system. The platform uses Firebase for authentication and real-time notifications.",
        tech: ["React", "Node.js", "MongoDB", "Firebase", "Express.js"],
        image: "/projects/plateshare.png",
        live: "https://plateshare-ahd.netlify.app/",
        github: "https://github.com/alhasandhali/plateShare-client-site",
        gradient: "from-green-500 to-emerald-400",
        challenges: [
            "Designing an efficient matching algorithm for donors and recipients",
            "Implementing real-time notifications using Firebase Cloud Messaging",
            "Ensuring data privacy and security for sensitive user information",
            "Creating an intuitive UX for users with varying technical literacy"
        ],
        improvements: [
            "Add geolocation-based matching for nearby donations",
            "Implement a rating and review system for donors",
            "Create a mobile app version using React Native",
            "Add scheduling feature for recurring donations"
        ]
    },
    {
        id: 4,
        title: "Gamora Gaming Showcase",
        desc: "Responsive gaming showcase featuring protected routes, Firebase auth, and interactive Framer Motion animations.",
        detailedDesc: "Gamora is a modern gaming showcase platform that features an extensive game library with detailed information, user reviews, and wishlist functionality. Built with React and styled with DaisyUI, it showcases smooth animations using Framer Motion and implements protected routes for user-specific features.",
        tech: ["React", "DaisyUI", "Firebase", "Framer Motion", "React Router"],
        image: "/projects/gamora.png",
        live: "https://gamora-ahd.netlify.app/",
        github: "https://github.com/alhasandhali/gamora",
        gradient: "from-purple-600 to-pink-500",
        challenges: [
            "Integrating third-party gaming APIs for real-time data",
            "Creating complex animations without impacting performance",
            "Implementing protected routes and role-based access control",
            "Optimizing image loading for game cover art"
        ],
        improvements: [
            "Add social features like friend lists and game recommendations",
            "Implement a community forum for game discussions",
            "Add streaming integration for live gameplay",
            "Create personalized game recommendations using ML"
        ]
    }
];

export const TIMELINE = [
    {
        year: "2023 - 2027",
        title: "BSc in Computer Science & Engineering",
        place: "Southeast University, Dhaka",
        desc: "Currently pursuing degree. Focused on Data Structures, Algorithms, and Web Technologies.",
        icon: React.createElement(FaGraduationCap),
        type: "education"
    },
    {
        year: "Nov 2025",
        title: "Full Stack Development (Projects)",
        place: "Personal Projects",
        desc: "Built scalable applications like TechTrove and PlateShare using the MERN stack and Next.js.",
        icon: React.createElement(FaBriefcase),
        type: "work"
    }
];
