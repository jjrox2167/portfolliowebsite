'use client';
import * as motion from 'motion/react-client';
import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-20 px-4 relative bg-[#99D6F7]">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-roboto-mono font-bold text-white text-center mb-12"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeIn' }}
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
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold uppercase">
            Building Tomorrow’s Solutions Through Today’s Technology
            <span className='block w-36 h-0.5 bg-white mx-auto mt-2'></span>
          </h3>
          <p>
            With 7+ years of experience, I’ve delivered high-quality, scalable IT solutions across cloud and virtualization platforms.
          </p>
          <p>
            As the organization’s technology SME, I consult with executives and engineers to design networks, systems, and cloud architectures that drive operational excellence.
          </p>
          <button className="mt-4 px-6 py-3 bg-[#58a6d0] text-white rounded-full shadow-md font-semibold">
            View Resume
          </button>
        </motion.div>

        {/* Right cards without animation */}
        <div className="grid grid-cols-1 gap-6">
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
            <div
              key={idx}
              className="gradient-border rounded-md bg-[#58a6d0] hover:bg-[#70a6d0] hover:scale-105 transition duration-200 ease-in-out shadow-lg p-6"
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
            </div>
          ))}
        </div>
        {/* bottom of About Me/ Title */}
      </div>
        <div className='container mx-auto max-w-5xl text-center py-16'>
          <h1 className='font-roboto-mono text-white text-2xl font-bold uppercase'>Technical Skills
            <span className='block w-26 h-0.5 bg-white mx-auto mt-2'></span>
          </h1>
        </div>
      <div className='container items-center mx-auto grid grid-cols-4 gap-6'>
        <div className='gradient-border rounded-md bg-[#58a6d0] py-30'></div>
        <div className='gradient-border rounded-md bg-[#58a6d0] py-30'></div>
        <div className='gradient-border rounded-md bg-[#58a6d0] py-30'></div>
        <div className='gradient-border rounded-md bg-[#58a6d0] py-30'></div>
      </div>

    </section>
  );
}
