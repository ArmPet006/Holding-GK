import './index.scss';
import HeroesList from "./heroes-list";

const Heroes = () => {
    return (
        <>
            <h2 className={`page_title`}>Герои</h2>
            <HeroesList/>
        </>
    )
}

export default Heroes;