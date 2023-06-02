import React from 'react';
import '../styles/App.css';
import Sound from '../atom/Sound';

function Header() {

  return (
    <header className='animate-move-and-opacity-title flex flex-col justify-center items-center w-[80%] h-auto p-0 m-0'>
      <div className= 'flex justify-between items-center rounded-lg px-6 py-5 w-[100%] bg-indigoTitle'>
        <h1 className='text-xl font-medium text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <Sound/>
      </div>
      
      <blockquote className='self-start pl-6 my-3 text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</blockquote>
    </header>
  )
}

export default Header;