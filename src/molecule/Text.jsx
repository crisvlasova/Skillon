import React from 'react';
import NextLam from '../atom/NextLam';
import '../styles/App.css';

function Text() {
    return (
    <main className='animate-move-and-opacity-text flex flex-row justify-start items-start w-[80%] h-auto py-0 m-0'>
        <p className='flex justify-center align-middle p-3 w-[70%] rounded-lg bg-indigoText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum excepturi labore ipsum earum atque repudiandae quibusdam quia! Incidunt, dolor libero quisquam deleniti dicta pariatur? Facilis perferendis voluptatum eius natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tenetur dolore minima earum, dignissimos beatae est! Corporis laudantium similique vero, aperiam, dolores beatae ipsam reprehenderit odit illum, debitis amet voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto et, maiores debitis, ea magnam facere molestiae excepturi vel adipisci porro ullam in maxime aliquid. Eum blanditiis ex optio mollitia omnis.
        </p>
        <div className='flex flex-col justify-center items-center gap-5'>
            <iframe className='h-[250px]  p-0 text-base' src="https://embed.lottiefiles.com/animation/141107"></iframe>
            <NextLam/>
        </div>
    </main>)
}

export default Text;