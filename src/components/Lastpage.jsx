import React from 'react'

function Lastpage() {
  return (
    <div className='w-full flex flex-col items-center '>
        <div className='flex flex-col  items-center'>
            <h1 className='text-[5vw]'> Get in touch today!</h1>
            <div className='flex w-[60vw] gap-[2vw] mt-[3vh]   justify-between'>
                <div className='w-1/2 flex gap-[1.5vw] items-center justify-center h-[17vh] rounded-2xl border-[.1vw] border-zinc-950'>
                    <div className='w-[6vw] h-[6vw] rounded-xl bg-zinc-700 bg-center bg-cover bg-[url("https://m.economictimes.com/thumb/msid-63994786,width-1200,height-900,resizemode-4,imgsize-35146/gmail-gets-a-makeover-heres-how-you-can-make-the-most-of-its-features.jpg")]'></div>
                    <h1 className='text-[3vw] font-bold'>Gmail</h1>
                    <p  className='text-[1vw]'>Lorem,ipsum dolor.</p>
                </div>
                <div className='w-1/2 flex gap-[1.5vw] items-center justify-center h-[17vh] rounded-2xl border-[.1vw] border-zinc-950'>
                    <div className='w-[6vw] h-[6vw] rounded-xl bg-zinc-700 bg-center bg-cover bg-[url("https://www.pngmart.com/files/22/Technical-Support-PNG-Image.png")]'></div>
                    <h1 className='text-[3vw] font-bold'>Gmail</h1>
                    <p  className='text-[1vw]'>Lorem,ipsum dolor.</p>
                </div>
            </div>
        </div>


        <div className='bigcontainer flex flex-col items-center w-[80vw] mt-[8vw]  '>
            <div className='container'>
                <div className='flex gap-[3vw]'>
                    <div className='left w-1/2 h-[80vh]  flex flex-col gap-[2vh]'>
                        <div className='left_top  h-[40vh]  '>
                            <h1 className='ml-[3vw] mt-[3vw] text-[1.5vw] '>Full Name:</h1>
                            <div className='w-[30vw] ml-[3vw] mt-[1vw] h-[10vh] rounded-xl border-[.1vw] border-zinc-950'></div>
                        </div>
                        <div className='left_bot  h-[40vh] '>
                        <h1 className='ml-[3vw] mt-[1vw] text-[1.5vw] '>Full Name:</h1>
                            <div className='w-[30vw] ml-[3vw] mt-[1vw] h-[10vh] rounded-xl border-[.1vw] border-zinc-950'></div>
                        
                        </div>
                    </div>
                    <div className='right w-1/2 h-[80vh]  flex flex-col gap-[2vh]'>
                    <div className='right_top  h-[40vh] '>
                            <h1 className='ml-[3vw] mt-[3vw] text-[1.5vw] '>Full Name:</h1>
                            <div className='w-[30vw] ml-[3vw] mt-[1vw] h-[10vh] rounded-xl border-[.1vw] border-zinc-950'></div>
                        </div>
                        <div className='right_top  h-[40vh]  '>
                            <h1 className='ml-[3vw] mt-[1vw] text-[1.5vw] '>Full Name:</h1>
                            <div className='w-[30vw] ml-[3vw] mt-[1vw] h-[10vh] rounded-xl border-[.1vw] border-zinc-950'></div>
                        </div>                  
                          </div>

                </div>

            </div>
            <div>
                <h1 className='text-[2vw]'>Comment</h1>
            <div className='comment w-[75vw]  h-[40vh] rounded-2xl  border-[.1vw] border-zinc-700'></div>

            </div>
            <button className='px-[3vw] py-[1vw] rounded-full font-semibold mt-[5vh] shadow-lg hover:shadow-xl hover:bg-[#0d0f28] hover:text-[#fffdfd] transition-shadow duration-300 bg-green-400 border-[.1vw] border-zinc-700 '>Send Message</button>


        </div>

    </div>
  )
}

export default Lastpage