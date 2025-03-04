import {topics} from "@/app/journal/topics.ts";
import PostItem from "@/Components/PostItem";

enum UrlPath {
    "Спецпроект" = "specproject",
    "Body" = "body",
    "Fun Toys" = "funtoys",
    "Home and Design" = "homeanddesign",
    "Look st" = "lookst"
}

const JournalMobileView = ({theme}: { theme: "light" | "dark" }) => {
    return (
        <div className="journal_mobile_view_container">
            <h2 className={`page_title ${theme}`}>Журнал</h2>
            {
                topics.map((item, index) => (
                    <PostItem
                        key={index}
                        navigatePath={`/journal/${UrlPath[item.title as keyof typeof UrlPath]}`}
                    />
                ))
            }
        </div>
    )
}
export default JournalMobileView
