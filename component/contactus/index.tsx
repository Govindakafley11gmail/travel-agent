"use client";

import { motion } from "framer-motion";
import {
    Award,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";

import ContactUsForm from "./form";

export default function TravelContactUS() {
    const ContactUsData = [
        {
            // icon: Phone,
            text: "+975 77 89 33 46",
            href: "tel:+975 77 89 33 46",
            color: "#34D399", // green for phone (optional)
            src:"/telephone.png"
        },
        {
            // icon: Mail,
            text: "Mail",
            href: "info@lumorabhutan.com",
            color: "#D44638", // Gmail red
            src:"/gmail.png"
        },
        {
            // icon: Facebook,
            text: "Facebook",
            href: "https://www.facebook.com/profile.php?id=61580366382758",
            color: "#1877F2", // Facebook blue
            src: "/facebook.png",
        },
        {
            // icon: Instagram,
            text: "Instagram",
            href: "https://instagram.com/bhutanbestinbound",
            color: "#E4405F", // Instagram pinkish
            src: "/instagram.png",
        },
        {
            // icon: Linkedin,
            text: "Linkedin",
            href: "https://linkedin.com/company/bhutanbestinbound",
            color: "#0A66C2", // LinkedIn blue
            src: "/linkedin.png"
        },
        {
            // icon: MapPin,
            text: "Place",
            href: "https://maps.google.com/?q=Thimphu+Bhutan",
            color: "#EA4335", // Google Maps red
            src:"/location.png"
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section className="relative py-20 px-5 md:px-12 bg-bgsubcolor overflow-hidden">
            <div className="relative z-10 max-w-8xl mx-auto flex flex-col md:flex-row justify-center  gap-12">
                {/* LEFT IMAGE (on desktop), BELOW ON MOBILE */}
                <div className="order-2 md:order-1 flex justify-center items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, x: -80 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-xl overflow-hidden shadow-2xl w-[300px] sm:w-[500px] p-2">
                            <img
                                src="/contactus.jpg"
                                alt="Traveler hiking"
                                className="w-full h-[700px] sm:h-[600px] object-fill"
                            />

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute top-6 right-6"
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >

                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT CONTENT (on desktop), ABOVE ON MOBILE */}
                <div className="order-1 md:order-2 max-w-xl  md:mr-20 text-left md:text-left">
                    <p className="text-green-500 font-medium  tracking-widest uppercase text-2xl not-visited: mb-3 font-sans">
We are waiting for your message/call 😊                    </p>
                    <p className="text-black  font-lato  tracking-widest  text-xl not-visited: mb-3">
                        We are the tour service provider in Bhutan
                    </p>
                    <p className="text-gray-700 text-lg">
                       We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, please fill out the form below. Alternatively, you can scan the QR code to contact us directly or access our WhatsApp. Our team is always ready to listen and will get back to you as quickly as possible. Your thoughts matter to us, and we’re excited to connect!
                    </p>

                    <div className="my-4">
                        <ContactUsForm />

                    </div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-5 mt-10 justify-center items-center md:ml-16 "
                    >
                        {ContactUsData.map((reason, index) => {
                            // const Icon = reason.icon;
                            return (
                                <motion.a
                                    key={index}
                                    href={reason.href}
                                    variants={item}
                                    className="flex items-center gap-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* {Icon && (
                                        <Icon
                                            className="w-7 h-7 flex-shrink-0"
                                            style={{ color: reason.color }}
                                        />
                                    )} */}
                                    {reason.src && (
                                        <Image
                                            src={reason.src}
                                            width={40}
                                            height={40}
                                            alt="Social Icon"
                                            className="object-contain"
                                        />
                                    )}
                                    <p className="text-gray-600 font-serif text-base leading-snug">
                                        {reason.text}
                                    </p>
                                </motion.a>
                            );
                        })}

                    </motion.div>
                </div>

            </div>
        </section>
    );
}
