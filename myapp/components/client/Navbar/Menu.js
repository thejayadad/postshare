'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Menu = () => {
  const pathName = usePathname();
  const links = [
    {
      title: 'Homepage',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ];

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="drawer-button">
          <FiMenu size={30} />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

        <div className="menu p-4 gap-2 w-80 flex flex-col min-h-full bg-base-200 text-base-content">
          {/* Logo Section */}
          <div className='bg-orange-200 p-2 h-20 flex items-center justify-center'>
            <h1 className="text-2xl font-bold text-white">FanHub</h1>
          </div>

          {/* NavLinks Section */}
          <div className='bg-orange-200 flex flex-col gap-4 p-2 flex-1'>
            {links.map((link) => (
              <Link key={link.path} 
              className={`link ${pathName === link.path ? 'active-link' : ''}`}
              href={link.path}>
                {link.title}
              </Link>
            ))}
          </div>

          {/* Footer Section */}
          <div className='p-2 h-16 flex items-center justify-center'>
            <p className="text-sm text-gray-800">© 2023 FanHub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
