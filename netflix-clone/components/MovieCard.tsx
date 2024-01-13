import React from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'

interface MovieCartProp{
    data : MovieInterface;
}

const  MovieCard: React.FC<MovieCartProp>=({data})=> {
  return (
    <div className='group bg-zinc-800 col-span-1 relative h-52'>
        <img src={data.thumbnailUrl} 
        className='h-52 
        w-full object-cover
        shadow-xl rounded-lg
        group-hover:opacity-70
         cursor-pointer'/>

         <div className='opacity-0 w-full z-20 group-hover:opacity-100
         absolute top-0 scale-0 group-hover:scale-105 invisible sm:visible'>
             <img src={data.thumbnailUrl}  className='h-36 
                w-full object-cover
                shadow-xl rounded-lg
                cursor-pointer' />

            <div className='z-20 bg-zinc-800 p-2 lg:p-4 absolute w-full shadow-lg 
            rounded-b-md'>

                <div className='flex flex-row items-center gap-4'>

                <div className='bg-white
                 flex items-center justify-center rounded-full w-6 h-7 lg:w-8
                 transition 
                 border-2
                 border-white
                 hover:border-neutral-300'>
                    <PlayIcon className='text-black w-4 lg:w-6'></PlayIcon>


                </div>


                </div>

               

            </div>

               

         </div>


    </div>
  )
}

export default MovieCard