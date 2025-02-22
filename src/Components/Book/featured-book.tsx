import {FC} from "react";

interface Props {
    imgSrc?: string;
    coverColor?: string;
    className?: string;
}

const FeaturedBook: FC<Props> = ({imgSrc, coverColor = "#31353E", className}) => {
    return (
        <figure>
            <svg className={className} viewBox="0 0 505 495" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_323_101)">
                    <path
                        d="M0 28C0 25.2386 2.23858 23 5 23H383C385.761 23 388 25.2386 388 28V457C388 459.761 385.761 462 383 462H4.99999C2.23857 462 0 459.761 0 457V28Z"
                        fill="white"/>
                    <path
                        d="M2 28C2 26.3431 3.34314 25 5 25H383C384.657 25 386 26.3431 386 28V457C386 458.657 384.657 460 383 460H4.99999C3.34315 460 2 458.657 2 457V28Z"
                        stroke="black" strokeWidth="4"/>
                </g>
                <path d="M361 4V479L384 456.977V27.1876L361 4Z" fill="white"/>
                <g filter="url(#filter1_f_323_101)">
                    <path d="M363 479L383 459L498 461L363 479Z" fill="black" fillOpacity="0.5"/>
                </g>
                <rect width="362" height="483" rx="5" fill={coverColor}/>
                <image clipPath="inset(0% round 5px)" href={imgSrc} height="483" width="362"
                       preserveAspectRatio="xMidYMid slice"/>
                <defs>
                    <filter id="filter0_d_323_101" x="0" y="14.4" width="432.6" height="480.2"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="24" dy="12"/>
                        <feGaussianBlur stdDeviation="10.3"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_323_101"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_323_101" result="shape"/>
                    </filter>
                    <filter id="filter1_f_323_101" x="356.8" y="452.8" width="147.4" height="32.4"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="3.1" result="effect1_foregroundBlur_323_101"/>
                    </filter>
                </defs>
            </svg>
        </figure>
    )
}
export default FeaturedBook