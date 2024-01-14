import React from 'react'

interface MobileMenuProps {
    visible?: boolean;
  }

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if(!visible){

        return null;
    }
  return (
    <div className=
    'bg-gray-950 w-48 absolute rounded-lg top-8 border-2 left-0 py-5 flex-col border-gray-800 flex'>
        <div className='flex flex-col gap-4'>
            <div className='px-3 text-center text-white hover:underline'>
                Home
            </div>
            <div className='px-3 text-center text-white hover:underline'>
                Film
            </div>
            <div className='px-3 text-center text-white hover:underline'>
                New & Popular
            </div>
            <div className='px-3 text-center text-white hover:underline'>
                My List
            </div>
            <div className='px-3 text-center text-white hover:underline'>
                Browse by Langugaes
            </div>

        </div>
     </div>
  )
}

export default MobileMenu