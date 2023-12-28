'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Menu = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const handleToggleDrawer = () => {
      setDrawerOpen(!isDrawerOpen);
    };
  return (
            <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <label htmlFor="my-drawer" className=" drawer-button"><FiMenu size={30} /></label>
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    
            <div className="menu p-4 gap-2 w-80  flex flex-col min-h-full  bg-base-200 text-base-content">
            <div className='bg-orange-200  p-2 h-48'>
                Logo
                ldfnibakl
                aslkna
                asnklva
                </div> 
                <div className='bg-orange-200 flex flex-col gap-8 p-2 h-48'>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Home</Link>
                </div>
                <div className='bg-orange-200 p-2 h-64'>
                Footer
                </div>       
            </div>
        </div>
        </div>
  )
}

export default Menu