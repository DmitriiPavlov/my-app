'use client';

import getRandoDog from "../randomdog"; // Ensure this import is correct

export default function About() {
    
    return (
        <div className ="flex flex-col items-center justify-center h-screen border-2 border-gray-300">
            <h1>Welcome to the premiere dog adoption website!</h1>
            <p>Click below to learn about the different dog breeds we have to offer!</p>
            <div>
            <a 
                id="collie" 
                className="border-2 rounded-md p-1" 
                href="./dogs/Collie">
                Explore the Collie
            </a>
            <a 
                id="huskie" 
                className="border-2 rounded-md p-1" 
                href="./dogs/Huskie">
                Explore the Husky
            </a>
            <a 
                id="rotweiller" 
                className="border-2 rounded-md p-1" 
                href="./dogs/Rottweiller">
                Explore the Rottweiler
            </a>
            </div>
        </div>
    );
}