export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-950">
            <div className="relative flex h-24 w-24 items-center justify-center">
                {/* Outer spinning ring */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin transition-colors duration-1000" />

                {/* Inner reverse spinning ring */}
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-cyan-500 border-l-pink-500 animate-[spin_1s_linear_infinite_reverse] opacity-80" />

                {/* Center pulse */}
                <div className="h-4 w-4 rounded-full bg-blue-500 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            </div>
        </div>
    );
}
