import React from 'react'
import PostItem from "@/Components/PostItem";
import Arrow from "@/Helpers/Svg/arrow.tsx";
import VerticalAdBanner from "@/Components/AdBanner/Vertical/vertical-banner.tsx";

const SectionSlide = ({ref, nextButtonClick, prevButtonClick}: any) => {
    return (
        <div className="slide" ref={ref}>
            <h3>Книга</h3>
            <PostItem/>
            <PostItem/>
            <div className="slide_button_container">
                {prevButtonClick &&
                    <button className="slide_button prev" onClick={prevButtonClick}>
                        <Arrow size={"1.875rem"}/>
                    </button>
                }
                {nextButtonClick &&
                    <button className="slide_button next" onClick={nextButtonClick}>
                        <Arrow size={"1.875rem"}/>
                    </button>
                }
            </div>
            <VerticalAdBanner/>
        </div>
    )
}
export default SectionSlide
