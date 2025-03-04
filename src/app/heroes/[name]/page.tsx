import SinglePage from "@/app/(shared)/SinglePage";

// export async function generateStaticParams() {
//     return [
//         {
//             name: "ArturPetrosyan"
//         }
//     ];
// }

const SingleHero = async ({params}: any) => {
    console.log(await params);

    return (
        <SinglePage/>
    )
}
export default SingleHero