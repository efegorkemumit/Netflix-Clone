import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getSession, signOut } from 'next-auth/react'
import { NextPageContext } from 'next'
import useCurrentUser from '@/hooks/useCurrentUser'
import Navbar from '@/components/Navbar'
import Billboard from '@/components/Billboard'
import MovieList from '@/components/MovieList'
import useMovieList from '@/hooks/useMovieList'
import useFavoriMovie from '@/hooks/useFavorites'
import useInfoModalStore from '@/hooks/useInfoModalStore'
import InfoModal from '@/components/InfoModal'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(context: NextPageContext) {

  const session = await getSession(context);

  if(!session){
    return{
      redirect:{
        destination:'/auth',
        permanent : false,
      }
    }
  }

  return{
    props: {}
  }
  
}



export default function Home() {

  const {data:user} = useCurrentUser();
  const {data:movies} = useMovieList();
  const {data:favoriMovie} = useFavoriMovie();
  const {isOpen, closeModal} = useInfoModalStore();

  return (
    <>

    <InfoModal visible={isOpen} onClose={closeModal}></InfoModal>
      <Navbar></Navbar>
      <Billboard></Billboard>

      <div className='lg:mt-44 sm:mt-5'>      </div>

        <div className='p-6'>
      <MovieList title='Trending' data={movies}></MovieList>

      <MovieList title='Favori List' data={favoriMovie}></MovieList>

      </div>

<div className='h-96'></div>
    

      
              </>
  )
}
