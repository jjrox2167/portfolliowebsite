'use client';
import * as motion from 'motion/react-client';
import Image from "next/image";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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

export default function AboutSection() {
  return (
    <section id='about' className="scroll-mt-0 py-20 px-4 relative bg-[#99D6F7]">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-roboto-mono font-bold text-white text-center mb-20 mt-2 uppercase"
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
      </div>

      {/* Section title for skills */}
      <div className='container mx-auto max-w-5xl text-center py-16'>
        <h1 className='font-roboto-mono text-white text-2xl font-bold uppercase'>
          Software/Development Technical Skills
          <span className='block w-72 h-0.5 bg-white mx-auto mt-2'></span>
        </h1>
      </div>

      <div className='container items-center mx-auto grid grid-cols-3 gap-6'>
        <h2 className='text-white text-2xl font-roboto-mono text-center uppercase'>Programming Languages</h2>
        <h2 className='text-white text-2xl font-roboto-mono text-center uppercase'>Frameworks & Libraries</h2>
        <h2 className='text-white text-2xl font-roboto-mono text-center uppercase'>Tools & Platforms</h2>
        <h2></h2>
      </div>

      <motion.div
        className='container items-center mx-auto grid grid-cols-3 gap-6'
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Column 1 */}
        <motion.div className='gradient-border rounded-md bg-[#58a6d0] py-6' variants={skillsVariants}>
          <div className='flex justify-center mb-2 gap-4'>
            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image
                src="icons/HTML5.svg"
                alt='html5'
                width={40}
                height={40}
              />
            </span>
            
            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image src="/icons/CSS3.svg" alt="CSSLogo" width={40} height={40} />
            </span>            

            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image src="/icons/javascript.svg" alt="JavsScriptLogo" width={40} height={40} />
            
            </span>            
            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image src="/icons/powershell.svg" alt="WindowsPowershellLogo" width={40} height={40} />
            </span>
            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image src="/icons/Bash.svg" alt="LinuxBashLogo" width={40} height={40} />
            </span>


          </div>
        </motion.div>

        {/* Frameworks and Libraries Column */}
        <motion.div className='gradient-border rounded-md bg-[#58a6d0] py-6' variants={skillsVariants}>
          <div className='flex justify-center mb-2 gap-4'>
            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image
                src="/icons/TypeScript.svg"
                alt="TypeScript"
                width={40}
                height={40}
              />
            </span>

            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image src="/icons/React.svg" alt="React" width={40} height={40} />
            </span>

            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image src="/icons/next.svg" alt="Next.js" width={45} height={45} />
            </span>

            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image src="/icons/Node.js.svg" alt="Node.js" width={40} height={40} />
            </span>

            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image src="/icons/Vite.js.svg" alt="Vite" width={40} height={40} />
            </span>
          </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div className='gradient-border rounded-md bg-[#58a6d0] py-6' variants={skillsVariants}>
          <div className='flex justify-center mb-2 gap-4'>
            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image src="/icons/github.svg" alt="GitHub" width={40} height={40} />
            </span>            
            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image src="/icons/git.svg" alt="Git" width={40} height={40} />
            </span>
            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image src="/icons/Hashicorp Terraform.svg" alt="TerraformLogo" width={40} height={40} />
            </span>
            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image src="/icons/Azure.svg" alt="AzureLogo" width={40} height={40} />
            </span>
            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image src="/icons/Grafana.svg" alt="GrafanaLogo" width={40} height={40} />
            </span>
            <span className="bg-white rounded-lg flex items-center justify-center w-12 h-12
            transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-300/50">
              <Image src="/icons/Prometheus.svg" alt="Prometheus" width={40} height={40} />
            </span>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
