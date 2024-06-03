import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Videopage from './components/Videopage'
import Logopage from './components/Logopage'
import Fourbox from './components/Fourbox'
import Nextfourbox from './components/Nextfourbox'
import Pricingboxpage from './components/Pricingboxpage'

function App() {
  return (
    <div className='w-full  overflow-hidden bg-[#ffffff]'>
      <Navbar/>
      <Landingpage/>
      <Videopage/>
      <Logopage/>
      <Fourbox/>
      <Nextfourbox/>
      <Pricingboxpage/>
    </div>
  )
}

export default App