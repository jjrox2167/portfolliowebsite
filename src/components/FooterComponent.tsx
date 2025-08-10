'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-0">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left - copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Julien L. Brown&apos;s Portfolio Website.
        </p>

        {/* Center - nav links */}
        <div className=" mr-50 flex gap-6">
          <Link href="/" className="hover:text-sky-400 transition">Home</Link>
          <Link href="/about" className="hover:text-sky-400 transition">About</Link>
          <Link href="/projects" className="hover:text-sky-400 transition">Projects</Link>
          <Link href="/contact" className="hover:text-sky-400 transition">Contact</Link>
        </div>

        {/* Right - social icons */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/jjrox2167" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/julien-b-760731121" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:julienbrown2019@gmail.com" className="hover:text-sky-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
