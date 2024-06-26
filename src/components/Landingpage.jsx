import { motion } from 'framer-motion'
import React from 'react'

function Landingpage() {
  return (
    <motion.div initial={{ y: "-100%" }} animate={{ y:"0%" }} transition={{ ease: [0.61, 1, 0.88, 1], duration:.8 }} className='w-full flex flex-col items-center h-[75vh]  bg-[#a8d1df]'>
        <div className='Heading flex text-[5vw] font-bold justify-center w-full h-[30vh] '>
            <h1 className='tracking-tight py-[4vw] leading-[5vw] '>Automate and Simplify <br /><span className='ml-[10vw]'></span> web Scraping</h1>
        </div>
        <div className='para py-[3vh] font-["Gilroy"] w-[42vw] h-[20vh] tracking-tight '>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis debitis soluta aut saepe animi. Odio, molestias. Ullam earum ratione voluptates!</p>
        </div>
        <button className=' hover:scale-125  px-[3vw] py-[1.5vh] rounded-2xl bg-[#252784] text-zinc-100 border-[.1vw] shadow-lg hover:shadow-xl hover:bg-[#4885c7] transition-shadow duration-300'>Start for free</button>
    </motion.div>
  )
}

export default Landingpage