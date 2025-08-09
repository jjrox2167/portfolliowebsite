'use client';
import * as motion from 'motion/react-client';
import { 
  SiHtml5,
  SiDocker,
  SiGithub,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiCss3,
  SiJavascript,
  SiGnubash,
  SiNodedotjs,
  SiVite,
  SiGit,
  SiTerraform,
  SiGrafana,
  SiPrometheus,
} from 'react-icons/si';

import { VscAzure, VscTerminalPowershell } from "react-icons/vsc";
import React from 'react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillsVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

  const skills = [
    { label: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
    { label: 'Docker', icon: <SiDocker className="text-blue-500" /> },
    { label: 'GitHub', icon: <SiGithub className="text-black" /> },
    { label: 'React', icon: <SiReact className="text-blue-400" /> },
    { label: 'Next.js', icon: <SiNextdotjs className="text-gray-900" /> },
    { label: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
    { label: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  ];

export default function AboutSection() {
  return (
    <section id='about' className="scroll-mt-0 py-20 px-4 relative bg-[#99D6F7]">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-roboto-mono font-bold text-white text-center mb-10 uppercase"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeIn' }}
        viewport={{ once: true }}
      >
        
        ABOUT ME
      </motion.h2>
      
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left intro section */}
        <motion.div
          className="space-y-6 text-white text-center"
          initial={{ x: -90, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold uppercase">
            Building Tomorrow’s Solutions Through Today’s Technology
            <span className='block w-36 h-0.5 bg-white mx-auto mt-2'></span>
          </h3>
          <p className='text-lg'>
            With 7+ years of experience, I’ve delivered high-quality, scalable IT solutions across cloud and virtualization platforms.
          </p>
          <p className='text-lg'>
            In my current role, I am responsible for being the organization&apos;s subject matter for technology as well as consulting with the executive team, designing networks, engineering IT systems, and implementing versatile cloud solutions. I am also responsible for maintaining the organization&apos;s IT infrastructure and ensuring that all systems are up-to-date and running efficiently.
          </p>
          <a
            href="/JulienBrown_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-6 py-3 bg-[#58a6d0] text-white rounded-full shadow-md font-semibold hover:bg-[#70b4dd] transition"
          >
          View Resume
          </a>
        </motion.div>

        {/* Right cards*/}

<motion.div
  className="grid grid-cols-1 gap-6"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  {[
    {
      title: 'NETWORK ARCHITECTURE',
      desc:
        'Designed multi-tier network architectures with SD-WAN, OSPF tuning, and VLAN redundancy (HSRP) for high availability.'
    },
    {
      title: 'SYSTEM DESIGN',
      desc:
        'Defined architectures, components, interfaces, and data flows, then deployed and managed the full IT stack for robust solutions.'
    },
    {
      title: 'DEVOPS ENGINEERING',
      desc:
        'Built IaC and CI/CD pipelines across on-prem and cloud (AWS/Azure), automating deployments and monitoring for reliable delivery.'
    }
  ].map((card, idx) => (
    <motion.div
      key={idx}
      className="gradient-border rounded-md bg-[#58a6d0] hover:bg-[#70a6d0] hover:scale-105 transition duration-200 ease-in-out shadow-lg p-6"
      variants={cardVariants}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-[#99D6F7]" />
        <div>
          <h4 className="font-roboto-mono font-semibold text-lg text-white">
            {card.title}
          </h4>
          <p className="text-white mt-1">{card.desc}</p>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>

        {/* bottom of About Me/ Title */}
      </div>
        <div className='container mx-auto  max-w-5xl text-center py-16'>
          <h1 className='font-roboto-mono text-white text-2xl font-bold uppercase'>Software/Development Technical Skills
            <span className='block w-72 h-0.5 bg-white mx-auto mt-2'></span>
          </h1>
        </div>
        <div className='container items-center mx-auto grid grid-cols-3 gap-6'>
          <h2 className='text-white text-2xl font-roboto-mono justify text-center uppercase'>Programming Languages</h2>
          <h2 className='text-white text-2xl font-roboto-mono justify text-center uppercase'>Frameworks & Libraries</h2>
          <h2 className='text-white text-2xl font-roboto-mono justify text-center uppercase'>Tools & Platforms</h2>
          <h2></h2>
        </div>
        
        
        <motion.div
        className='container items-center mx-auto grid grid-cols-3 gap-6'
        variants={containerVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        >
        <motion.div className='gradient-border rounded-md bg-[#58a6d0] py-25' variants={skillsVariants}>
           <div className="flex justify-center mb-2">
            
            <SiHtml5 className="text-5xl text-orange-500 bg-white rounded-lg py-1 w-12 h-12 mr-4" />
            <SiCss3 className='text-5xl text-blue-400 bg-white rounded-lg py-1 w-12 h-12 mr-4' />
            <SiJavascript className='text-5xl text-yellow-400 bg-white rounded-lg py-1 w-12 h-12 mr-4' />
            <SiGnubash className='text-5xl text-gray-400 bg-white rounded-lg py-1 w-12 h-12 mr-4'/>
            <VscTerminalPowershell className='text-5xl text-blue-400 bg-white rounded-lg py-1 w-12 h-12 mr-4' />
          </div>
        </motion.div>
        
        <motion.div className='gradient-border rounded-md bg-[#58a6d0] py-25' variants={skillsVariants}>
          <div className='flex justify-center mb-2'>
          
            <SiTailwindcss className='text-5xl text-blue-400 bg-white rounded-lg py-1 w-12 h-12 mr-4'/>
            <SiTypescript className='text-5xl text-blue-500 bg-white rounded-lg py-1 w-12 h-12 mr-4' />
            <SiReact className='text-5xl text-blue-300 bg-white rounded-lg py-1 w-12 h-12 mr-4'/>
            <SiNextdotjs className='text-5xl text-black bg-white rounded-lg py-1 w-12 h-12 mr-4'/>
            <SiNodedotjs className='text-5xl text-green-600 bg-white rounded-lg py-1 w-12 h-12 mr-4'/>
            <SiVite className='text-5xl text-purple-400 bg-white rounded-lg py-1 w-12 h-12 mr-4'/>
          
          </div>
        </motion.div>
        
        <motion.div className='gradient-border rounded-md bg-[#58a6d0] py-25' variants={skillsVariants}>
          <div className='flex justify-center mb-2'>

            <SiGithub className='text-5xl text-black bg-white rounded-lg py-1 w-12 h-12 mr-4'/>
            <SiGit className='text-5xl text-orange-500 bg-white rounded-lg py-1 w-12 h-12 mr-4'/>
            <SiDocker className='text-5xl text-blue-500 bg-white rounded-lg py-1 w-12 h-12 mr-4' />
            <SiTerraform className='text-5xl text-purple-600 bg-white rounded-lg py-1 w-12 h-12 mr-4'/>
            <SiGrafana className='text-5xl text-orange-500 bg-white rounded-lg py-1 w-12 h-12 mr-4'/>
            <SiPrometheus className='text-5xl text-orange-500 bg-white rounded-lg py-1 w-12 h-12 mr-4'/>
            <VscAzure className='text-5xl text-blue-400 bg-white rounded-lg py-1 w-12 h-12 mr-4'/>


          </div>
        </motion.div>
      </motion.div>
        

    </section>
  );
}
