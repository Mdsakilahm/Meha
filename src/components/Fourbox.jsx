import React from 'react'

function Fourbox() {
  return (
    <div className='w-full h-[120vh] flex flex-col overflow-hidden p-[2vw] gap-[2vw] '>
        <div className='w-full flex gap-[2vw] '>
            <div className='w-2/3 h-[55vh]  rounded-2xl border-[.2vw] bg-cover bg-center bg-[url("https://images.wondershare.com/democreator/guide/rotate-video-clips.jpg")] border-zinc-900'></div>
            <div className='w-1/3 h-[55vh] rounded-2xl border-[.2vw] border-zinc-900 bg-cover bg-center bg-[url("https://images.wondershare.com/democreator/screen-recorder/screen-recorder.png")]'></div>
        </div>
        <div className='w-full flex gap-[2vw] h-[30vh] '>
            <div className='w-1/3 h-[50vh] rounded-2xl border-[.2vw] border-red-900 bg-cover bg-center bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTfh-WG7G6teA1-3W36fauSfj4JZLeCn7JJzAIXCAYNPsVAHrPbVU_M5fWIRpnBfdUr6g&usqp=CAU")]'></div>
            <div className='w-2/3 h-[50vh] rounded-2xl border-[.2vw] border-red-900 bg-cover bg-center bg-[url("https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2023/09/xbox-game-bar-capture.png")]'></div>
        </div>
        </div>
  )
}

export default Fourbox