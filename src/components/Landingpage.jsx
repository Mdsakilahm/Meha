import React from 'react'

function Landingpage() {
  return (
    <div className='w-full flex flex-col items-center h-[80vh] bg-[#a8d1df]'>
        <div className='Heading flex text-[5vw] font-bold justify-center w-full h-[30vh] '>
            <h1 className='tracking-tight py-[4vw] leading-[5vw] '>Automate and Simplify <br /><span className='ml-[10vw]'></span> web Scraping</h1>
        </div>
        <div className='para py-[3vh] font-["Gilroy"] w-[42vw] h-[20vh] tracking-tight '>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis debitis soluta aut saepe animi. Odio, molestias. Ullam earum ratione voluptates!</p>
        </div>
        <button className='Sign in  px-[3vw] py-[1.5vh] rounded-2xl bg-[#252784] text-zinc-100 border-[.1vw]'>Start for free</button>
    </div>
  )
}

export default Landingpage