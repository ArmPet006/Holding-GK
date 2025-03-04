import "./vertical-banner.scss";

import Image from "next/image";
import TestImage from '@/../public/assets/images/vertical-ad.jpg';

const VerticalAdBanner = () => {
    return (
        <Image className="vertical_banner" src={TestImage} alt={"Banner Image"}/>
    )
}
export default VerticalAdBanner
