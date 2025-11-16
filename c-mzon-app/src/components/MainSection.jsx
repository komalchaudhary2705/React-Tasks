import React from 'react'


import Sidebar from './Sidebar'


const MainSection = () => {
  return (
    <div className='flex justify-center pt-10'>
        <div className='bg-white w-[85%] h-[75vh] rounded'>
        <div className='flex w-full h-full'>
            <Sidebar/>
            
        </div>
        </div>
    
        </div>
  )
}

export default MainSection