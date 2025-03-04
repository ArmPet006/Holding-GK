import "./index.scss";

import PostItem from "@/Components/PostItem";
import BackButton from "@/Components/UI/BackButton/back-button.tsx";

enum PageTitle {
    specproject = "Спецпроект",
    body = "Body",
    funtoys = "Fun Toys",
    homeanddesign = "Home and Design",
    lookst = "Look st"
}

// export async function generateStaticParams() {
//     return [
//         {name: "specproject"},
//         {name: "body"},
//         {name: "funtoys"},
//         {name: "homeanddesign"},
//         {name: "lookst"}
//     ];
// }

const JournalTopicList = async ({params}: any) => {
    const {name}: { name: string } = await params;

    return (
        <>
            <BackButton/>

            <div className="journal_topics_list">
                <h2 className="page_title">{PageTitle[name as keyof typeof PageTitle]}</h2>
                {
                    Array(10).fill(0).map((_, index) => (
                        <PostItem key={index} navigatePath={`${name}/${index}`}/>
                    ))
                }
            </div>
        </>
    )
}
export default JournalTopicList
