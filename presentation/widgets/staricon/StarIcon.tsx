import styles from  "./StarIcon.module.scss";
import {IconContext} from "@react-icons/all-files";
import {AiFillStar} from '@react-icons/all-files/ai/AiFillStar';

interface StarIconProps {
    color: string;
    size?: number
    percentage?: number;
}

export default function StarIcon({color, size = 1, percentage = 100}: StarIconProps) {
    return (
        <span style={{display: "inline-block", position: "relative"}}>
            <div className={styles.star_icon_unfilled}>
            <IconContext.Provider value={{
                size: `${size}em`
            }}>
                <AiFillStar/>
            </IconContext.Provider>
            </div>
            <div className={styles.star_icon_filled}>
            <IconContext.Provider value={{
                size: `${size}em`,
                style: {
                    clipPath: `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`
                }
            }}>
                <AiFillStar/>
            </IconContext.Provider>
            </div>
        </span>
    )
}