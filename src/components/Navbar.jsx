import { motion } from 'framer-motion'
import React from 'react'

function Navbar() {
  return (
    <motion.div initial={{ y: "-100%" }} animate={{ y:"0%" }} transition={{ ease: [0.61, 1, 0.88, 1], duration: 1,delay:1 }} className='w-full  p-[.6vw] flex border-b'>
         <div className='logo w-[6.5vw] h-[6.5vw] flex bg-center rounded-full bg-cover bg-[url("https://img.freepik.com/free-vector/abstract-logo-circular-shape_1043-155.jpg?w=740&t=st=1717436374~exp=1717436974~hmac=53f84471942c6b3bfcd13faa89204879d08209a2e09120ac3cea553cb5c2f4a7")]'></div>
         <div className='w-[40vw] ml-[6vw] flex items-center justify-between '>
            <h1 className='hover:scale-125 shadow-lg cursor-pointer  hover:shadow-xl hover:text-[#464eed]'>Products</h1>
            <h1 className='hover:scale-125 shadow-lg cursor-pointer hover:shadow-xl hover:text-[#464eed]'>Resources</h1>
            <h1 className='hover:scale-125 shadow-lg cursor-pointer hover:shadow-xl hover:text-[#464eed]'>Customers</h1>
            <h1 className='hover:scale-125 shadow-lg cursor-pointer hover:shadow-xl hover:text-[#464eed]'>Pricing</h1>
         </div>
         <div className='w-[30vw] ml-[25vw] flex gap-[1vw] items-center justify-center '>
            <button className='px-[3vw] py-[1vh] hover:scale-125 rounded-full text-zinc-950 border-[.1vw] shadow-lg hover:shadow-xl hover:bg-gray-100 transition-shadow duration-300' style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.2)' }}>Sign in</button>
            <button className='px-[3vw] py-[1vh] hover:scale-125 rounded-full bg-[#252784] text-zinc-100 border-[.1vw] shadow-lg hover:shadow-xl hover:bg-[#0d0f28] hover:text-[#fffdfd] transition-shadow duration-300' style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.2)' }}>Start for free</button>
         </div>
    </motion.div>
  )
}

export default Navbar
