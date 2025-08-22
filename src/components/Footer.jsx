import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-[#36404a] text-gray-800 dark:text-gray-300">

      {/* Top border with gradient */}
      <div className="h-0.5 w-full bg-gray-500 dark:bg-white" />

      <div className="sm:max-w-[1140px] mx-auto px-6 py-12 grid sm:grid-cols-3 gap-10 text-center sm:text-left">
        
        {/* Brand / Title */}
        <div>
          <h1 className="text-3xl font-extrabold italic bg-gradient-to-r from-[#FD6F00] via-red-500 to-[#FD6F00] dark:text-white text-transparent bg-clip-text">
            Babita
          </h1>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Passionate Developer | Problem Solver | Lifelong Learner
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200">Quick Links</h2>
          <ul className="space-y-2">
            {["Home", "About", "Skills", "Qualification", "Projects", "Contact"].map((item, index) => (
              <li key={index}>
                <a 
                  href={`/${item.toLowerCase()}`} 
                  className="hover:text-[#FD6F00] transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200">Connect</h2>
          <ul className="space-y-2">
            <li><a href="https://leetcode.com/u/babita1947/" className="hover:text-[#FD6F00] transition-colors">Leetcode</a></li>
            <li><a href="https://linkedin.com/in/babita-kumari-766710270" className="hover:text-[#FD6F00] transition-colors">LinkedIn</a></li>
            <li><a href="https://github.com/Babita1947" className="hover:text-[#FD6F00] transition-colors">GitHub</a></li>
            <li><a href="https://x.com/Babita3007" className="hover:text-[#FD6F00] transition-colors">Twitter</a></li>
            <li><a href="mailto:babitakumari.ky3007@gmail.com" className="hover:text-[#FD6F00] transition-colors">Message</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700" />

      {/* Bottom Bar */}
      <div className="w-full bg-[#FD6F00] text-gray-100 py-4 text-center text-sm">
        © 2025 All Rights Reserved | Designed & Developed with ❤️ by <span className="font-semibold">Babita</span>
      </div>
    </footer>
  );
}

export default Footer;
