'use client';
export default async function getRandoDog() {
    let dogBreedList = await fetch("https://dog.ceo/api/breeds/list/all");
    let breeds = await dogBreedList.json();
    let breedsList = Object.keys(breeds.message);
    return breedsList[Math.floor(Math.random() * breedsList.length)];
}