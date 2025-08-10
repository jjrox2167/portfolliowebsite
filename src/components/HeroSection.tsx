'use client';
import * as motion from "motion/react-client";
import React from "react";
import { FaGithub, FaLinkedin,} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import HeadshotJulienB from "../assets/images/HeadshotJulienB.png";
import { ParticleCanvas } from "@/hooks/particle";

    const handleEmailClick = () => {
      // Option 1: Open default mail client
      window.location.href = 'mailto:julienbrown2019@gmail.com?subject=Portfolio&body=Hello,'
    }

export default function HeroSection() {
    return (
    
    <section id="Home" className="scroll-mt-24"> 
    
    <div className="min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Left side content */}
             <motion.div 
             initial={{ opacity: 0, y: 20 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.6 }}
             className="text-center lg:text-left">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-roboto-mono font-bold tight-fit text-gray-900 leading-tight mb-2">
                    JULIEN L. BROWN&apos;S {" "} 
                    <span className=" text-[#58a6d0]">
                    PORTFOLIO
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-8 mw-2xl">
                    IT Systems Engineer × Developer × Cloud Architect — One Technical Vision, Endless Solutions.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-10 py-3 bg-[#58a6d0] text-white rounded-lg shadow-md hover:bg-[#4a90b0] transition-colors duration-300 flex items-center justify-center text-lg font-semibold"
                    onClick={() => window.location.href = "/contact"}
                >
                Learn More About Julien
                <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                </motion.button>
                
                <div className="flex items-center justify-center lg:justify-start mt-6 gap-4">
                    <a
                    href="https://www.linkedin.com/in/julien-b-760731121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#58a6d0] transition-colors"
                    >
                        <FaLinkedin
                        className="text-gray-400 hover:text-[#58a6d0]"
                        size={30}
                        color=""
                        />
                    </a>
                    <a
                    href="https://github.com/jjrox2167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#59a6d0] transition-colors"
                    >
                        <FaGithub
                            className="text-gray-400 hover:text-[#58a6d0]"
                            size={30}
                            color=""
                        />
                    </a>
                    <a
                    href="mailto:julienbrown2019@gmail.com?subject=Inquiry%20Regarding%20Your%20Portfolio"
                    aria-label="Send email"
                    className="text-gray-400 hover:text-[#58a6d0] transition-colors"
                    >
                        <MdEmail
                            className="text-gray-400 hover:text-[#58a6d0]"
                            size={30}
                            color=""
                         />
                    </a>
                </div>
             </motion.div>

            {/* Right side content*/}
                <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="flex justify-center lg:justify-end md:mt-0 mt-8 sm:mt-0">
                    <div className="w-34 h-34 sm:w-20 sm:h-20 md:w-40 md:h-40 lg:w-58 lg:h-58 rounded-full overflow-hidden shadow-lg">
                        <Image
                        src={HeadshotJulienB}
                        alt="Julien L. Brown Headshot"
                        width={250}
                        height={250}
                        priority
                        loading="eager"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAADgdz34AAAAAXNSR
                        0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAA"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
        </div>
    </section>
    );
}