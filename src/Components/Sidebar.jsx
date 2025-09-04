import React from 'react'

export default function Sidebar() {
  return (
  <aside className='flex-col flex justify-center items-center  border-2 h-154 w-75 fixed top-18 left-0 bg-red-200 '>
    <div className=' text-lg font-bold font-sans   '>
        
        <div className='m-6 shadow-xl  hover:text-zinc-400  cursor-pointer flex '> Top Stories</div>
        <div className='m-6 shadow-xl hover:text-zinc-400  cursor-pointer flex pt-2'>Politics</div>
        <div className='m-6 shadow-xl hover:text-zinc-400  cursor-pointer flex pt-2'>Business</div>
        <div className='m-6 shadow-xl hover:text-zinc-400  cursor-pointer flex pt-2'>Technology</div>
        <div className='m-6 shadow-xl hover:text-zinc-400  cursor-pointer flex pt-2'>Health</div>
        <div className='m-6 shadow-xl hover:text-zinc-400  cursor-pointer flex pt-2'>Sports</div>
        <div className='m-6 shadow-xl hover:text-zinc-400  cursor-pointer flex pt-2'>Entertainment</div>
        <div className='m-6 shadow-xl hover:text-zinc-400  cursor-pointer flex pt-2'> World</div>

    </div>
  </aside>
  );
};
