import React from 'react'

function Whisper({content}) {
  console.log(content)
  return (
    <div className="
    mb-3
    max-w-sm
    rounded-2xl
    bg-slate-700
    px-4
    py-3
    border
    border-violet-500/20
">
    <p className="text-sm text-slate-200">
      {content}
    </p>
</div>
  )
}

export default Whisper
