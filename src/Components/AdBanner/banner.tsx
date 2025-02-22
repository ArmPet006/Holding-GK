import './banner.scss';
import {createRef, FC, RefObject, useRef, useState} from "react";

import Image from "next/image";
import TestImage from '@/../public/assets/images/ad-image.png';
import Arrow from "@/Helpers/Svg/arrow.tsx";

const ads = [0, 1, 2];

const AdBanner: FC = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const refs = useRef<RefObject<any>[]>(ads.map(() => createRef()));

    const nextSlide = () => {
        if (scrollIndex === refs.current.length - 1) {
            return;
        }
        refs.current[scrollIndex + 1].current.scrollIntoView({behavior: 'smooth', block: 'nearest'})
        setScrollIndex(prev => prev + 1);
    }

    const prevSlide = () => {
        if (scrollIndex === 0) {
            return;
        }
        refs.current[scrollIndex - 1].current.scrollIntoView({behavior: 'smooth', block: 'nearest'})
        setScrollIndex(prev => prev - 1);
    }

    return (
        <div className="banner_container">
            <button className="slide_button prev" onClick={prevSlide}>
                <Arrow size={"2.813rem"}/>
            </button>

            <div className="slide_container">
                <Image ref={refs.current[0]} src={TestImage} alt={"Banner Image"}/>
                <Image ref={refs.current[1]} src={TestImage} alt={"Banner Image"}/>
                <Image ref={refs.current[2]} src={TestImage} alt={"Banner Image"}/>
            </div>

            <button className="slide_button next" onClick={nextSlide}>
                <Arrow size={"2.813rem"}/>
            </button>
        </div>
    )
}
export default AdBanner
