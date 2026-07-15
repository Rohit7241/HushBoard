import React, { useState } from 'react'
import Whisper from './Whisper'

function FloatingCard({title,category,content,wd}) {
  const [isopen,setisopen]=useState(false);
  const openWhispers=()=>{
    setisopen(!isopen);
  }
  const[Like,setLike]=useState(false);
  const[Hug,setHug]=useState(false);
  const[Laugh,setLaugh]=useState(false);
  const[MB,setMBl]=useState(false);
  const[HS,setHsh]=useState(false);
  const[Salute,setSalute]=useState(false);
  const [LikeCnt,setLC]=useState(0);
  const [HugCnt,setH]=useState(0);
  const [LCnt,setL]=useState(0);
  const [MBCnt,setMB]=useState(0);
  const [HSCnt,setHS]=useState(0);
  const [SCnt,setSC]=useState(0);
  const handleLike=()=>{
     if(Like){
      setLike(false);
      setLC(LikeCnt-1);
     }
     else{
      setLike(true);
      setLC(LikeCnt+1);
     }
  }
  const handleHug=()=>{
     if(Hug){
      setHug(false);
      setH(HugCnt-1);
     }
     else{
      setHug(true);
      setH(HugCnt+1)
     }
  }
  const handleLaugh=()=>{
     if(Laugh){
      setLaugh(false);
      setL(LCnt-1);
     }
     else{
      setLaugh(true);
      setL(LCnt+1)
     }
  }
  const handleMB=()=>{
     if(MB){
      setMBl(false);
      setMB(MBCnt-1)
     }
     else{
      setMBl(true);
      setMB(MBCnt+1)
     }
  }
  const handleSalute=()=>{
     if(Salute){
      setSalute(false);
      setSC(SCnt-1)
     }
     else{
      setSalute(true);
      setSC(SCnt+1)
     }
  }
  const handleHS=()=>{
     if(HS){
      setHsh(false);
      setHS(HSCnt-1)
     }
     else{
      setHsh(true);
      setHS(HSCnt+1)
     }
  }
  return (
    <div className={`w-full max-w-xl relative transition-all duration-300
`}>
    <div className={`w-full max-w-xl mt-5 p-4
bg-slate-900 backdrop-blur-md border-5
border border-violet-400/40
text-sky-200
rounded-xl
shadow-[0_10px_35px_rgba(168,85,247,0.18)]
`}>
        <div className='flex justify-between p-2'>
           <h1 className='text-base'>Filthy-Fox-#3030</h1>
           <h1 className='text-xs'>10:00am</h1>
        </div>
        <div className='p-2'>
            <h1 className='text-xl text-fuchsia-400'>{title}</h1>
            <h2 className='text-sm mt-2'>🏷️{category}</h2>
            <p className='mt-5 text-base'>{content}</p>
        </div>
        <div className='p-2 flex justify-between'>
           <button className='p-2 bg-blue-800 rounded-xl cursor-pointer' onClick={handleLike}>❤️{LikeCnt}</button>
           <button className='p-2 bg-blue-800 rounded-xl cursor-pointer' onClick={handleHug}>🫂{HugCnt}</button>
           <button className='p-2 bg-blue-800 rounded-xl cursor-pointer' onClick={handleHS}>🤝{HSCnt}</button>
           <button className='p-2 bg-blue-800 rounded-xl cursor-pointer' onClick={handleLaugh}>😂{LCnt}</button>
           <button className='p-2 bg-blue-800 rounded-xl cursor-pointer' onClick={handleMB}>🤯{MBCnt}</button>
           <button className='p-2 bg-blue-800 rounded-xl cursor-pointer' onClick={handleSalute}>🫡{SCnt}</button>
        </div>
        <div>
          <button
  onClick={openWhispers}
  className="
    text-lg
    flex items-center 
    p-2 mt-2
    rounded-full
    bg-violet-600
    text-white
    font-semibold
    transition-all duration-300
    shadow-lg shadow-violet-600/30
    cursor-pointer
  "
>
    💭 {isopen ? "Close" : `Whispers (${10})`}
</button>
        </div>
    </div>
{isopen&&<div className="
absolute
left-8
top-full
mt-3
w-[320px]
max-h-96
overflow-y-auto
rounded-2xl
bg-slate-900
border border-violet-500/30
shadow-2xl
z-50 max-w-lg w-full px-10
">
       <div className='text-white font-bold relative '>
         <div className='m-1 sticky top-0 z-0 bg-violet-600 p-2 rounded-full px-15 text-xl w-fit '>💭Whispers</div>
         <div className=''>
          <Whisper/>
         <Whisper/>
         <Whisper/>
         <Whisper/>
         <Whisper/>
         <Whisper/>
         <Whisper/>
         <Whisper/>
         <Whisper/>
         </div>
        </div>
    </div>}
    </div>
  )
}

export default FloatingCard
