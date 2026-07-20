import React from 'react'
import NavBar from '../components/NavBar'
import FloatingCard from '../components/FloatingCard';
import { useEffect } from 'react';
import { getAllPosts } from '../apis/PostApi';

function Home() {
  let posts=[]
   useEffect(()=>{
     const fetch=async()=>{ const response=await getAllPosts();
      console.log(response) }
      fetch()
   },[])
  return (
    <>
    <div className='bg-black min-h-screen w-full'>
        <NavBar underline="Home"/>
    <div className='flex flex-col items-center pt-15 w-full'>
        {posts.map((post) => (
        <FloatingCard title={post.title} wd="2xl" category={post.category} content={post.content}/>
    )
    )}
    </div>
    </div>
    </>
  )
}

export default Home
