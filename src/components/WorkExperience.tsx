'use client';

import React from 'react';
import Layered_Waves from 'public/images/Layered_Waves.svg'

const WorkExperience = () => {
  return (

    <section id='experience' className="scroll-mt-0">
    <div className="bg-[url('/images/Layered_Waves.svg')] bg-cover bg-center bg-no-repeat">
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-10">
      <div className=''>
        <h1 id='#experience'className="text-3xl font-roboto-mono font-bold text-white mb-2 uppercase">Work Experience</h1>
        <p className="text-gray-600">A look at my career journey so far.</p>
      </div>
      </div>

      <ul className="relative border-l border-gray-300 pl-6">
        {[
          {
            date: 'May 2024 – Present',
            title: 'IT Systems Administrator',
            company: 'Rural Electric Supply Cooperative | Electrical Utility Distributor',
            bullets: [
              'Solely manages and oversees all internal IT operations for a $500M+ electrical utility distributor, leading end-to-end design, implementation, and support of enterprise technology solutions that ensure system reliability, scalability, and business continuity.',
              'Responsible for all IT systems and technology-related business operations for 9 warehouses and 100+ employees across the United States.',
              'Reduced annual IT expenditures by approximately $80,000+ through strategic hardware standardization, optimized warranty management, subscription and license evaluations, and strategic vendor renegotiations.',
              'Implemented Azure cloud solutions to streamline application deployments for the software development team, significantly accelerating time-to-market by 25%.',
              'Collaborated on software/hardware development strategies such as trunk-based and feature-flag driven development with technologies such as CI/CD pipelines, Git, and GitHub.',
              'Transformed the organization’s network infrastructure through revising IP addressing scheme and deployment of HP Aruba, Cisco Catalyst, and Cisco Meraki networking devices with emphasis on high-availability/fault-tolerant architecture.',
            ],
          },
          {
            date: 'August 2018 – June 2025',
            title: 'IT Specialist',
            company: 'United States Army Reserves | Department of Defense',
            bullets: [
              'Supported combat training center rotations, field training exercises, garrison operations, and contingency operations utilizing satellite system (CSS VSAT) communications.',
              'Operated as a supporting role for CENTRIX systems under the 88th Army, MSC-K, and the 498th on the Korean peninsula.',
              'Collaborated with Republic of Korea allied forces on sustaining communication infrastructure and equipment within exercise Ulchi Freedom Shield.',
            ],
          },
          {
            date: 'November 2022 – May 2024',
            title: 'IT Services Engineer',
            company: 'Rhyme Business Products | Managed Services Provider',
            bullets: [
              "Curated the organization's telecom services department within 1 year, achieving a remarkable $100,000+ in annual recurring revenue through innovative project implementation and process optimization.",
              "Provided solutions for over 20+ diverse businesses resulting in robust network infrastructure, encompassing routers, switches, firewalls, and IPSEC Site-to-Site VPN connections.",
              "Orchestrated Agile, hybrid, and waterfall-based approaches for various projects as the primary engineer & project manager; extending services to clients statewide and nationwide.",
            ],
          },
          {
            date: 'October 2021 – November 2022',
            title: 'IT Network Engineer',
            company: 'Ignatek LLC. | Managed Services Provider',
            bullets: [
              "Responsible for overseeing network operations for 12+ different organizations including an international cloud-based company composed of 150+ users and devices.",
              "Delivered tailored cloud, software, and infrastructure solutions to municipalities, public-service departments, and small/medium businesses.",
              "Provided LAN/WLAN on premise & virtualized network infrastructure deployment through multi-vendor firewall routers, switches, APs, and servers.",
            ]
            },
        ].map((exp, i) => (
          <li key={i} className="mb-10 ml-4 relative">
            <span className="absolute -left-13 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md"></span>
            <div className=" bg-white/30 backdrop-blur-lg rounded-lg shadow-md p-4">
              <time className="text-sm text-gray-500 font-mono">{exp.date}</time>
              <h3 className="text-lg text-[#58a6d0] font-bold mt-1">{exp.title}</h3>
              <p className="  text-sm font-semibold text-gray-700 mt-1">{exp.company}</p>
              <ul className="list-disc list-outside pl-5 mt-2 space-y-1 text-sm text-gray-600">
                {exp.bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </section>
  );
};

export default WorkExperience;
