import React from 'react'

function Nextfourbox() {
  return (
<div className='w-full h-[120vh] flex flex-col p-[2vw] gap-[2vw] '>
        <div className='w-full flex gap-[2vw] '>
            <div className='w-2/3 h-[55vh]  rounded-2xl border-[.2vw] bg-cover bg-center  border-zinc-900'></div>
            <div className='w-1/3 h-[55vh] rounded-2xl border-[.2vw] border-zinc-900 bg-cover bg-center '></div>
        </div>
        <div className='w-full flex gap-[2vw] h-[30vh] '>
            <div className='w-1/2 h-[50vh] rounded-2xl border-[.2vw] border-red-900 bg-cover bg-center '></div>
            <div className='w-1/2  gap-[2vw] h-[30vh]'>
            <div className=' h-[40vh] rounded-2xl border-[.2vw] border-red-900 bg-cover bg-center'></div>
            <div className=' h-[10vh] rounded-2xl border-[.2vw]'></div>

            </div>
        </div>
        </div>  )
}

export default Nextfourbox