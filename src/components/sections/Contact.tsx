"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { FiMail, FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { toast } from 'sonner';

interface ContactFormInputs {
    name: string;
    email: string;
    message: string;
}

export function Contact() {
    const { register, handleSubmit, reset } = useForm<ContactFormInputs>();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
        setIsLoading(true);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: data.name,
                    user_email: data.email,
                    message: data.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            toast.success("Message sent successfully!", {
                description: "I'll get back to you as soon as possible.",
                duration: 5000,
            });
            reset();
        } catch (error) {
            console.error("Failed to send email:", error);
            toast.error("Failed to send message", {
                description: "Please try again or email me directly at alhasandhali@gmail.com",
                duration: 5000,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-12 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-500/5 blur-3xl -z-10 rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%" className="max-w-4xl mx-auto bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-6 md:p-12 shadow-2xl">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 dark:text-white">Let&apos;s Work Together</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">Have a project in mind? Let&apos;s build something amazing.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        <div className="space-y-6 md:space-y-8">
                            <div className="space-y-4 md:space-y-6">
                                <a href="mailto:alhasandhali@gmail.com" className="flex items-center gap-3 sm:gap-4 group p-2 sm:p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 cursor-pointer">
                                    <div className="p-2 sm:p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                                        <FiMail className="text-lg sm:text-xl" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs sm:text-sm text-neutral-500">Email</p>
                                        <p className="font-medium text-sm sm:text-base dark:text-white truncate">alhasandhali@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+8801993821479" className="flex items-center gap-3 sm:gap-4 group p-2 sm:p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 cursor-pointer">
                                    <div className="p-2 sm:p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors shrink-0">
                                        <FiPhone className="text-lg sm:text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm text-neutral-500">Phone</p>
                                        <p className="font-medium text-sm sm:text-base dark:text-white">+880 1993-821479</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-3 sm:gap-4 group p-2 sm:p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800">
                                    <div className="p-2 sm:p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors shrink-0">
                                        <span className="font-bold text-lg sm:text-xl">📍</span>
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm text-neutral-500">Location</p>
                                        <p className="font-medium text-sm sm:text-base dark:text-white">Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 sm:gap-4">
                                <a href="https://github.com/alhasandhali" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group flex-1 flex justify-center items-center">
                                    <FiGithub className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 group-hover:text-blue-500" />
                                </a>
                                <a href="https://www.linkedin.com/in/al-hasan-dhali/" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group flex-1 flex justify-center items-center">
                                    <FiLinkedin className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 group-hover:text-blue-500" />
                                </a>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <Input {...register("name", { required: true })} placeholder="Name" className="bg-white dark:bg-neutral-950 h-12" />
                            </div>
                            <div>
                                <Input type="email" {...register("email", { required: true })} placeholder="Email" className="bg-white dark:bg-neutral-950 h-12" />
                            </div>
                            <div>
                                <Textarea {...register("message", { required: true })} rows={4} placeholder="Message" className="bg-white dark:bg-neutral-950 resize-none min-h-[120px]" />
                            </div>
                            <Button type="submit" disabled={isLoading} className="w-full h-12 bg-linear-to-r from-blue-600 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                                {isLoading ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
