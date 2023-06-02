import React from 'react'
import { useState, useRef } from 'react';
import '../styles/App.css';
import audioFile from '../sounds/prueba.mp3';

function Sound() {

  let [sound, setSound] = useState('stop');

  let soundContainer = "flex flex-row justify-end items-center gap-2";


  let playContainerInactive = "absolute mr-6 flex justify-start items-center w-auto h-auto hover:animate-playing-pause-stop";
  let playContainerActive = `${playContainerInactive} animate-fill-once animate-play-triangle-fade hidden`;

  let pauseContainer = "flex flex-row justify-start items-center gap-2 w-[25px] h-auto "
  let pauseContainerInactive = `${pauseContainer} hidden`;
  let pauseContainerActive = `${pauseContainer} animate-playing-pause-stop`;

  let stopContainerInactive = "flex flex-row justify-center items-center opacity-50";
  let stopContainerActive = "flex flex-row justify-center items-center animate-playing-pause-stop";


  let bigTriangle = "absolute h-[18px] w-[18px] ml-[-9.5px] border-[18px] border-l-[30px] border-solid border-transparent2 border-l-indigoTitle";
  let bigTriangleInactive = `${bigTriangle} animate-fill-once animate-play-triangle-anim-inverse`;
  let bigTriangleActive = `${bigTriangleInactive} animate-fill-once animate-play-triangle-anim`;
  let smallTriangle = "h-[15px] w-[15px] border-[15px] border-l-[25px] border-solid border-transparent2 border-l-white";
  let pauseBar = "h-[25px] w-[2px] bg-white";
  let bigSquare = "w-[25px] h-[25px] border border-solid border-2 border-white bg-indigoTitle";


  let audioRef = useRef(null);
  let handleClick = (value) => {
    setSound(value);
    if(value == "play") audioRef.current.play();
    if(value == "pause") audioRef.current.pause();
    if(value == "stop") {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className={soundContainer} >
      <div className={sound == 'play'? playContainerActive : playContainerInactive} onClick={() => handleClick('play')} title='play'>
        <div className={sound == 'play'? bigTriangleActive : bigTriangleInactive}></div>
        <div className={smallTriangle}></div>
      </div>

      <div className={sound == 'play'? pauseContainerActive : pauseContainerInactive} onClick={() => handleClick('pause')} title='pause'>
        <div className={pauseBar}></div>
        <div className={pauseBar}></div>
      </div>

      <div className={sound == 'play'? stopContainerActive : stopContainerInactive} onClick={() => handleClick('stop')} title='stop'>
        <div className={bigSquare}></div>
      </div>
      <audio ref={audioRef} onEnded={() => handleClick('stop')}>
        <source src={audioFile} type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default Sound;