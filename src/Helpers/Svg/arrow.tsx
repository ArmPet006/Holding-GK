import React, {FC} from 'react'

interface Props {
    size: number | string;
}

const Arrow: FC<Props> = ({size}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.8801 9.43243C15.7494 9.30178 15.6458 9.14666 15.5751 8.97596C15.5044 8.80525 15.468 8.62228 15.468 8.43751C15.468 8.25273 15.5044 8.06977 15.5751 7.89906C15.6458 7.72835 15.7494 7.57324 15.8801 7.44259C16.0107 7.31193 16.1658 7.20829 16.3365 7.13758C16.5073 7.06687 16.6902 7.03047 16.875 7.03047C17.0598 7.03047 17.2427 7.06687 17.4134 7.13758C17.5841 7.20829 17.7393 7.31193 17.8699 7.44259L31.9324 21.5051C32.0632 21.6357 32.1669 21.7908 32.2377 21.9615C32.3084 22.1322 32.3448 22.3152 32.3448 22.5C32.3448 22.6848 32.3084 22.8678 32.2377 23.0385C32.1669 23.2092 32.0632 23.3643 31.9324 23.4949L17.8699 37.5574C17.606 37.8213 17.2482 37.9695 16.875 37.9695C16.5018 37.9695 16.1439 37.8213 15.8801 37.5574C15.6162 37.2936 15.468 36.9357 15.468 36.5625C15.468 36.1893 15.6162 35.8315 15.8801 35.5676L28.9494 22.5L15.8801 9.43243Z"
                fill="white"/>
        </svg>
    )
}
export default Arrow
