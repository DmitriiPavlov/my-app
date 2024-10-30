import * as React from 'react'
//
export default async function Dog(params:{params:{breed:string}}){
    const breedName = params.params.breed;
    const linkRef: {[key:string]:string} = {
        "Huskie" : "https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg",
        "Collie" : "https://upload.wikimedia.org/wikipedia/commons/6/65/Rough-Collie-japan08_%28cropped%29.jpg",
        "Rottweiller": "https://cdn.britannica.com/69/234469-050-B883797B/Rottweiler-dog.jpg"
    }

    return (
    <>
    <div className = "flex flex-col items-center justify-center h-screen border-2 border-gray-300">
    <img className="w-2/3" src={linkRef[breedName]}/>
    <p>{"The Famed " + breedName}</p>
    <p>This lucky pet simply can't wait to be adopted!</p>
    </div>
    </>

    );
}