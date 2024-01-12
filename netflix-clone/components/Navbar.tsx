import React, { use, useCallback, useState } from 'react'
import { BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import NavItem from './NavItem'
import MobileMenu from './MobileMenu';


function Navbar() {

    const [MobileMenuItem, setMobileMenu]=useState(false);

    const toogleMobileMenu = useCallback(()=>{
        setMobileMenu((current)=> !current)
    })
  return (
    <nav className='w-full fixed z-20'>
        <div className='px-4 py-6 flex flex-row transition'>
            <img src='/images/logo.png'  className='lg:h-8 h-6'/>
            <div className='flex-row lg:flex hidden  gap-7 ml-12'>
                <NavItem name='Home' active></NavItem>
                <NavItem name='Films' ></NavItem>
                <NavItem name='Series' ></NavItem>
                <NavItem name='New & Popular' ></NavItem>
                <NavItem name='My List' ></NavItem>
                <NavItem name='Browse My Languages' ></NavItem>
            </div>
            <div onClick={toogleMobileMenu} className=' relative lg:hidden flex flex-row items-center gap-2 ml-6'>
                <p className='text-white'>Browse</p>
                <ChevronDownIcon className='w-5 text-white'>
                </ChevronDownIcon>
                <MobileMenu visible={MobileMenuItem}> </MobileMenu>

            </div>
            <div className='flex flex-row ml-auto gap-7 items-center'>
                <div className='cursor-pointer'>
                <MagnifyingGlassIcon className='w-5 text-white'></MagnifyingGlassIcon>
                </div>
                
                <div className='cursor-pointer'>
                <BellIcon className='w-5 text-white'></BellIcon>
                </div>

                <div className='flex flex-row ml-auto gap-2 items-center'>
                <div className='lg:h-8 lg:w-8 h-6 w-6 rounded-lg overflow-hidden'>
                    <img src='/images/default-red.png'></img>
                </div>
               
            </div>
            </div>
           


        </div>
    </nav>
  )
}

export default Navbar