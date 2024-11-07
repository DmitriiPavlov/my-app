// /app/[breed]/page.tsx

// Function to fetch the breed image (this will be used at build time)
async function fetchBreedImage(breedName: string) {
    const res = await fetch(`https://dog.ceo/api/breed/${breedName}/images/random`);
    const imgSrc = await res.json();
    return imgSrc.message;
}

// Generate static paths for each breed
export async function generateStaticParams() {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await res.json();
    const breeds = Object.keys(data.message);

    // Generate a list of breed paths
    return breeds.map((breed) => ({
        params: { breed: breed.toLowerCase() },
    }));
}

// Server component to fetch the image for each breed
export default async function Dog({ params }: { params: { breed: string } }) {
    const breedName = params.breed.toLowerCase(); // Get the breed name
    const imgSrc = await fetchBreedImage(breedName);

    return (
        <div className="flex flex-col items-center justify-center h-screen border-2 border-gray-300">
            <img className="w-2/3" src={imgSrc} alt={`Random image of ${breedName}`} />
            <p>{`The Famed ${breedName}`}</p>
            <p>This lucky pet simply can't wait to be adopted!</p>
        </div>
    );
}
