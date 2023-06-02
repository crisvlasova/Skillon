import React from 'react';
import Header from '../molecule/Header';
import Text from '../molecule/Text';
import'../styles/App.css';

function App() {

  return (
    <div className="m-5 p-5 flex h-[1000] max-w-[1000px] flex-col items-center justify-center rounded-3xl" >
      <Header/>
      <Text/>
      <br />
      <div className='h-[2px] w-[30%] bg-indigoText rounded-xl animate-move-and-opacity-hr'></div>
    </div>
  )
};

export default App
