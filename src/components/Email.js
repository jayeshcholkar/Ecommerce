import React from 'react'
import SendSharpIcon from '@mui/icons-material/SendSharp';

function Email() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-[250px] bg-[#111011]'>
        <h1 className='text-[40px] font-semibold text-white'>
        News latter
        </h1>
        <h2 className='text-[20px] text-white mt-1'>
        Get up to date
        </h2>
        <div className='flex mt-3 px-2 items-center justify-between
         bg-white min-w-[20rem] min-h-[2rem] border rounded-full'>
       <input type="email" 
            placeholder="Enter your email"
            className='outline-none pl-1 flex'
        />
        <button className=''>
        <SendSharpIcon className='text-[20px]'/>
        </button>
        </div>
    </div>
  )
}

export default Email