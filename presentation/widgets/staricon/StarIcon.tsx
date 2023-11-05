import styles from  "./StarIcon.module.scss";
import {IconContext} from "@react-icons/all-files";
import {AiFillStar} from '@react-icons/all-files/ai/AiFillStar';

interface StarIconProps {
    size?: number
    percentage?: number;
}

export default function StarIcon({size = 1, percentage = 100}: StarIconProps) {
    return (
        <div className={styles.container}>
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
        </div>
    )
}