import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import FloatingCard from '../components/FloatingCard';
import { useEffect } from 'react';
import { getAllPosts } from '../apis/PostApi';

function Home() {
  const [posts,setposts]=useState([])
   useEffect(()=>{
     const fetch=async()=>{ const response=await getAllPosts();
    setposts(response.data.data)
    console.log(response.data.data)
    }
      fetch()
   },[])
  return (
    <>
    <div className='bg-black min-h-screen w-full'>
        <NavBar underline="Home"/>
    <div className='flex flex-col items-center pt-15 w-full'>
        {posts.map((post) => (
         <FloatingCard title={post.Title} wd="2xl" category={post.Category} content={post.content} anoname={post.AnoName} time={post.createdAt} postid={post._id}/>
    )
    )}
    </div>
    </div>
    </>
  )
}

export default Home
