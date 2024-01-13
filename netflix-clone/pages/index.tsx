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

  return (
    <>
      <Navbar></Navbar>
      <Billboard></Billboard>

      <MovieList title='Trending' data={movies}></MovieList>

      <div className='h-72'>a</div>
      <div className='h-72'>a</div>
      <div className='h-72'>a</div>
      <div className='h-72'>a</div>
      <div className='h-72'>a</div>
      <div className='h-72'>a</div>
        </>
  )
}
