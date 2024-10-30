export default function Post(params:{params:{postid:string}}){
    return (
        <>
            <h1>{params["params"]["postid"]}</h1>
        </>
    )
}