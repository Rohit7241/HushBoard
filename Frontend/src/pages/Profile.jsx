import React from 'react'
import NavBar from '../components/NavBar'
import CreatePost from './CreatePost';
import FloatingCard from '../components/FloatingCard';

function Profile() {
const posts = [
  {
    title: "Midnight Thoughts",
    category: "Confession",
    content:
      "Sometimes I pretend to be asleep just so I don't have to reply to messages. It's not that I dislike people—I just get mentally exhausted."
  },
  {
    title: "Placement Anxiety",
    category: "Career",
    content:
      "Everyone around me seems to have internships while I'm still trying to finish projects. It feels like I'm falling behind even though I know comparing myself isn't healthy."
  },
  {
    title: "Best Chai Spot?",
    category: "Question",
    content:
      "What's the best place near campus to have chai after evening classes? Looking for somewhere with good vibes and not too crowded."
  },
  {
    title: "Tiny Win Today",
    category: "Achievement",
    content:
      "Solved a problem that I'd been stuck on for three days. It wasn't even that hard in hindsight, but finally seeing 'Accepted' felt amazing."
  },
  {
    title: "Hostel Life",
    category: "College",
    content:
      "The 2 AM conversations with hostel friends are somehow more meaningful than most conversations during the day."
  },
  {
    title: "Need Advice",
    category: "Advice",
    content:
      "How do you stay consistent with studying when motivation disappears after just a couple of days?"
  },
  {
    title: "Unpopular Opinion",
    category: "Opinion",
    content:
      "Rain is only enjoyable when you don't have somewhere important to be."
  },
  {
    title: "Funny Incident",
    category: "Humor",
    content:
      "Walked confidently into the wrong classroom, sat for ten minutes, and only realized something was off when the professor started teaching a completely different subject."
  },
  {
    title: "Movie Recommendation",
    category: "Entertainment",
    content:
      "Looking for psychological thriller movies with unexpected endings. I've already watched most of the mainstream ones."
  },
  {
    title: "Overthinking",
    category: "Mental Health",
    content:
      "Does anyone else replay conversations in their head hours later wondering if they sounded weird, or is it just me?"
  }
];
  return (
    <div className='min-h-screen w-full flex items-center flex-col bg-black'>
      <NavBar underline="Profile"/>
    <div className=' mt-17 p-4 bg-linear-to-r from-indigo-500 via-sky-500 to-fuchsia-500 w-full flex items-center'>
        <img src="profile.png" className="rounded-full  w-20 h-20
            sm:w-20 sm:h-20
            md:w-25 md:h-25
            lg:w-30 lg:h-30
            xl:w-40 xl:h-40
            object-cover" alt="" />
        <h1 className='ml-5 text-5xl font-bold'>@UserName</h1>
    </div>
     <h1 className='text-white text-4xl p-4'>Your Posts 💬</h1>
    <div className='text-2xl flex justify-center w-full flex-wrap text-white'>
        {posts.map((post)=>(
            <div className='m-3'>
                <FloatingCard title={post.title} wd="xl" category={post.category} content={post.content} />
            </div>
        ))}
    </div>
    </div>
  )
}

export default Profile
