'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MdOpacity } from 'react-icons/md';
import { SiHtml5, SiNextdotjs, SiPrisma, SiTailwindcss, SiTerraform, SiVite } from 'react-icons/si';
import FieldFlowHomescreen from 'public/images/FieldFlowHomescreen.jpg'
import { FaNode, FaReact, FaRegArrowAltCircleRight } from "react-icons/fa";
import { VscAzure } from 'react-icons/vsc';



const projects = [
  {
    title: "FieldFlow: Field Schedule & Manage Jobs",
    description: "A modern project management web app helps contracting companies manage projects & teams, assign tasks, and track progress in real time.",
    tech: [
      { name: "Next.JS", icon: SiNextdotjs, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Prisma", icon: SiPrisma, color: "#61DAFB" },
    ],
    image: '/FieldFlowHomescreen.jpg'
  },
  {
    title: "Simple Product Landing Page",
    description: "A modern sleek landing page for websites selling subscription-based products or services. Created with React, Tailwind, and Vite.JS",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vite", icon: SiVite, color: "#61DAFB" },
    ],
    
    image: '/SimpleLandingPage.jpg'
  
  },
  {
    title: "Azure Terraform Deployment: Static Web-Page",
    description: "Terraform cloud deployment of a basic HTML/CSS static web-page via Azure Blob Storage service.",
    tech: [
      { name: "Terraform", icon: SiTerraform, color: "#8040C9"},
      { name: "Azure", icon: VscAzure, color: "#0080FF"},
      { name: "HTML", icon: SiHtml5, color: "#E34F26"},
    ],

    image: ''

  },


];

export default function ProjectsSection() {
  return (
    <section id='ProjectsSection' className='scroll-mt-0 relative bg-slate-700/90'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Title of Project Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center mb-20'
        >
          <h1  className="text-4xl md:text-5xl text-center font-roboto-mono font-bold uppercase mt-12
             text-white tracking-wide
             border-b-4 border-sky-500 inline-block pb-2
             transition-colors duration-300 hover:border-sky-400">
            Projects
          </h1>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'>
          {
            projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 }
                }}

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
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className="p-6 h-[25px]"
                  transition={{ duration: 0.3 }}
                >

                  <div className="flex justify-between items-start
                            mb-2 group/title">

                    <h3 className="text-2xl font-roboto-mono font-bold uppercase
                      text-sky-100 group-hover/title:text-sky-300 transition-colors">{project.title}</h3>
                      <FaRegArrowAltCircleRight 
                      className="h-6 w-6 text-slate-400 transition-all duration-300 group-hover/title:text-sky-300
                      group-hover/title:translate-x-1 group-hover/title:rotate-6"/>

                  </div>
                  <p className="text-slate-300/90 mb-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2">

                    {
                      project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 rounded-full text-sm flex items-center gap-1.5 group/tech
                          bg-slate-700/60 border border-slate-600 text-slate-200
                          transition-all duration-300
                        hover:border-sky-400 hover:bg-sky-500/15 hover:shadow-[0_0_0_1px_theme(colors.sky.400)]"
                        >
                          <tech.icon
                            style={{ color: tech.color }}
                            className="w-4 h-4 transition-colors" />
                          <span className="group-hover/tech:text-content transition-colors">
                            {tech.name}
                          </span>
                        </span>
                      ))
                    }

                  </div>

                </motion.div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  );
}
