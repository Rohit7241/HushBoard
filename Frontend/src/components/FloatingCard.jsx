import React from 'react'

function FloatingCard({title,category,content}) {
  return (
    <div className='w-full max-w-2xl mt-5
bg-slate-900 backdrop-blur-md border-5
border border-violet-400/40
text-sky-200
rounded-xl
shadow-[0_10px_35px_rgba(168,85,247,0.18)]
transition-all duration-300
hover:-translate-y-1'>
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
            <h1>❤️100</h1>
           <h1>🫂20</h1>
           <h1>🤝10</h1>
           <h1>😂10</h1>
           <h1>🤯0</h1>
           <h1>🫡0</h1>
        </div>
    </div>
  )
}

export default FloatingCard
