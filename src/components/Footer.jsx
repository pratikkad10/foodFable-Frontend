import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
<div>
    
    <footer className="bg-zinc-200 text-black py-4 shadow">
     
      <div className="container mx-auto flex justify-between px-4 items-center">
        <p className="text-sm">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
            <FaFacebookF className="h-6 w-6 hover:text-zinc-400" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="h-6 w-6 hover:text-zinc-400" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="h-6 w-6 hover:text-zinc-400" />
          </a>
          <a href="#" aria-label="GitHub">
            <FaGithub className="h-6 w-6 hover:text-zinc-400" />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube className="h-6 w-6 hover:text-zinc-400" />
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;