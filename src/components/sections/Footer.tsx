"use client";

export function Footer() {
    return (
        <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-600 dark:text-neutral-400">
            <p>© {new Date().getFullYear()} Al Hasan Dhali. Crafted with Next.js & Tailwind.</p>
        </footer>
    );
}
