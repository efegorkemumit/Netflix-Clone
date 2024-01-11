import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getSession, signOut } from 'next-auth/react'
import { NextPageContext } from 'next'
import useCurrentUser from '@/hooks/useCurrentUser'

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

  const {data :user} = useCurrentUser();

  return (
    <>
       <h1 className="text-3xl bg-red-800 font-bold underline">
      Hello world!
    
    </h1>
    <p className='text-white'>{user?.email}</p>
    <button onClick={()=>signOut()} className='w-full bg-black text-white text-xl'>Logout</button>
    
    
        </>
  )
}
