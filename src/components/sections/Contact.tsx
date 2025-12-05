"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import { FiMail, FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactFormInputs {
    name: string;
    email: string;
    message: string;
}

export function Contact() {
    const { register, handleSubmit, reset } = useForm<ContactFormInputs>();

    const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data as unknown as Record<string, unknown>, 'YOUR_PUBLIC_KEY')
            .then(() => {
                alert("Message sent successfully!");
                reset();
            })
            .catch((err) => console.error("Failed to send", err));
    };

    return (
        <section id="contact" className="py-20 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-500/5 blur-3xl -z-10 rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Let&apos;s Work Together</h2>
                        <p className="text-neutral-600 dark:text-neutral-400">Have a project in mind? Let&apos;s build something amazing.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <a href="mailto:alhasandhali@gmail.com" className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                        <FiMail className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-500">Email</p>
                                        <p className="font-medium dark:text-white">alhasandhali@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+8801234567890" className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                        <FiPhone className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-500">Phone</p>
                                        <p className="font-medium dark:text-white">+880 1234-567890</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                        <span className="font-bold text-xl">📍</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-500">Location</p>
                                        <p className="font-medium dark:text-white">Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group">
                                    <FiGithub className="text-xl text-neutral-600 dark:text-neutral-400 group-hover:text-blue-500" />
                                </a>
                                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors group">
                                    <FiLinkedin className="text-xl text-neutral-600 dark:text-neutral-400 group-hover:text-blue-500" />
                                </a>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <Input {...register("name", { required: true })} placeholder="Name" className="bg-white dark:bg-neutral-950" />
                            </div>
                            <div>
                                <Input type="email" {...register("email", { required: true })} placeholder="Email" className="bg-white dark:bg-neutral-950" />
                            </div>
                            <div>
                                <Textarea {...register("message", { required: true })} rows={4} placeholder="Message" className="bg-white dark:bg-neutral-950 resize-none" />
                            </div>
                            <Button type="submit" className="w-full bg-linear-to-r from-blue-600 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
