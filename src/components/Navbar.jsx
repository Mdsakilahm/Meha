import React from 'react'

function Navbar() {
  return (
    <div className='w-full p-[.6vw] flex h-[14vh] border-b'>
         <div className='logo w-[6.5vw] h-[6.5vw] flex bg-center rounded-full bg-cover bg-[url("https://img.freepik.com/free-vector/abstract-logo-circular-shape_1043-155.jpg?w=740&t=st=1717436374~exp=1717436974~hmac=53f84471942c6b3bfcd13faa89204879d08209a2e09120ac3cea553cb5c2f4a7")]'></div>
         <div className='w-[40vw] ml-[6vw] flex items-center justify-between '>
            <h1>Products</h1>
            <h1>Resources</h1>
            <h1>Customers</h1>
            <h1>Pricing</h1>
         </div>
         <div className=' w-[30vw] ml-[25vw] flex gap-[1vw] items-center justify-center '>
            <button className='Sign in  px-[3vw] py-[1vh] rounded-full text-zinc-950 border-[.1vw]'>Sign in</button>
            <button className='Sign in  px-[3vw] py-[1vh] rounded-full bg-[#252784] text-zinc-100 border-[.1vw]'>Start for free</button>

         </div>
    </div>
  )
}

export default Navbar