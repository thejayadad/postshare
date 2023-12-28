import React from 'react'
import Menu from './Menu'
import Logo from '@/components/Logo'

const Navbar = () => {
  return (
    <header className='px-4 py-8'>
        <nav className='flex justify-between mx-auto max-w-screen-xl'>
            <Menu />
            <Logo />
        </nav>
    </header>
  )
}

export default Navbar