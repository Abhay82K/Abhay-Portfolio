'use client';

import { useState } from 'react';
import { Menu, X, Home, User, Code, Folder, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Code },
    { href: '#projects', label: 'Projects', icon: Folder },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-gray-800'>
      <div className='max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between'>

        <a href='#home' className='flex items-center gap-3'>
          <div className='w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-orange-500/30'>
            AK
          </div>
          <span className='text-2xl font-bold tracking-wide'>Abhay Kumar</span>
        </a>

        <div className='hidden md:flex items-center gap-8 text-[16px] font-medium'>
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className='flex items-center gap-2 text-gray-300 hover:text-orange-400 transition duration-300 relative group'
            >
              <Icon size={18} />
              {label}
              <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full'></span>
            </a>
          ))}
        </div>

        <button
          className='md:hidden text-gray-300 hover:text-orange-400 transition'
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className='md:hidden border-t border-gray-800 bg-[#0f172a]'>
          <div className='px-6 py-4 flex flex-col gap-4'>
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className='flex items-center gap-3 text-gray-300 hover:text-orange-400 transition py-2'
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}