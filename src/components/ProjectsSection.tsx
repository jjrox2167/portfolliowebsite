'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import type { IconType } from 'react-icons';
import { ParticleCanvas } from '@/hooks/particle';

type TechItem = {
  name: string;
  icon: IconType | string; 
  color?: string;         
};

type Project = {
  title: string;
  description: string;
  tech: TechItem[];
  image: string;          
};

const projects: Project[] = [
  {
    title: "FieldFlow: Field Schedule & Manage Jobs",
    description: "A modern project management web app helps contracting companies manage projects & teams, assign tasks, and track progress in real time.",
    tech: [
      { name: "Next.JS", icon: "/icons/React.svg" },
      { name: "Tailwind", icon: "/icons/Tailwind CSS.svg" },
      { name: "Prisma", icon: "/icons/Prisma-IndigoSymbol.svg" },
    ],
    image: '/FieldFlowHomescreen.jpg'
  },
  {
    title: "Simple Product Landing Page",
    description: "A modern sleek landing page for websites selling subscription-based products or services. Created with React, Tailwind, and Vite.JS",
    tech: [
      { name: "React", icon: "/icons/React.svg" },
      { name: "Tailwind", icon: "/icons/Tailwind CSS.svg" },
      { name: "Vite", icon: "/icons/Vite.js.svg" },
    ],
    image: '/SimpleLandingPage.jpg'
  },
  {
    title: "Azure Terraform Deployment: Static Web-Page",
    description: "Terraform cloud deployment of a basic HTML/CSS static web-page via Azure Blob Storage service.",
    tech: [
      
      { name: "Terraform", icon: "/icons/Hashicorp Terraform.svg" },
      { name: "Azure", icon: "/icons/Azure.svg" },
      { name: "HTML", icon: "/icons/HTML5.svg" },
    ],
    image: '/oldfashioned-sc.jpg' 
  },
];

export default function ProjectsSection() {
  return (
    <section id='ProjectsSection' className='scroll-mt-0 relative bg-slate-700/90'>
      <ParticleCanvas/>
      <div className='max-w-7xl mx-auto px-6'>
       
       
       {/* Title of Project Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center mb-2'
        >
          <h1 className="text-4xl md:text-5xl text-center font-roboto-mono font-bold uppercase mt-12
             text-white tracking-wide border-b-4 border-sky-500 inline-block pb-2
             transition-colors duration-300 hover:border-sky-400">
            Projects
          </h1>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 py-20'>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative h-[500px] rounded-3xl overflow-hidden
                         bg-slate-800/90 border border-slate-700 shadow-xl cursor-pointer
                         transition-all duration-300 ease-out
                         hover:-translate-y-2 hover:shadow-2xl hover:border-sky-400"
            >
            
            
            
              {/* Image Section */}
              <motion.div
                className="h-[250px] relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-700/40 flex items-center justify-center text-slate-400">
                    No preview
                  </div>
                )}
              </motion.div>

             
             
             
              {/* Content Section */}
              <motion.div className="p-6" transition={{ duration: 0.3 }}>
                <div className="flex justify-between items-start mb-2 group/title">
                  <h3 className="text-2xl font-roboto-mono font-bold uppercase
                                 text-sky-100 group-hover/title:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <FaRegArrowAltCircleRight
                    className="h-6 w-6 text-slate-400 transition-all duration-300
                               group-hover/title:text-sky-300 group-hover/title:translate-x-1 group-hover/title:rotate-6"
                  />
                </div>

                <p className="text-slate-300/90 mb-2">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: TechItem, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full text-sm flex items-center gap-1.5 group/tech
                                 bg-slate-700/60 border border-slate-600 text-slate-200
                                 transition-all duration-300
                                 hover:border-sky-400 hover:bg-sky-500/15 hover:shadow-[0_0_0_1px_theme(colors.sky.400)]"
                    >
                      {typeof tech.icon === "string" ? (
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-4 h-4 transition-transform"
                        />
                      ) : (
                        <tech.icon
                          className="w-4 h-4 transition-colors"
                          style={tech.color ? { color: tech.color } : undefined}
                        />
                      )}
                      <span className="group-hover/tech:text-content transition-colors">
                        {tech.name}
                      </span>
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
