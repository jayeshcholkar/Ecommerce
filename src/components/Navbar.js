import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar h-[60px] shadow-md relative z-10 '>
    <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex items-center justify-between">
<Link to="/">

    <div className='font-semibold text-orange-700 
    text-xl cursor-pointer'>E-Commerce</div>
</Link>

    {/* center */}

    <div className=' flex  border rounded-full items-center
     ml-[40px] p-[5px] focus-within:border-[#9f5030] transition-all'>
    <input type="text" className=' outline-none placeholder:text-[14px]'placeholder="Search"/>
    <SearchIcon className='cursor-pointer' />
    
    </div>
    {/* rightside */}
    <div className='flex gap-3'>

        <div className='text-[16px] cursor-pointer'>Register</div>
        <div  className='text-[16px] cursor-pointer'>Sign in</div>
      <div  className='text-[16px] cursor-pointer'>
    <Badge badgeContent={2} color='warning'>
        <ShoppingCartIcon/>
    </Badge>

   </div>
    </div>

    </div>
    </div>
  )
}

export default Navbar