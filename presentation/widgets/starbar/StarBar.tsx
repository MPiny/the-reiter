import StarIcon from "../staricon/StarIcon";
import styles from "./StarBar.module.scss";

interface StarBarProps {
    stars?: number;
    value?: number;
    size?: number;
}

export default function StarBar({stars = 5, value = 0, size = 1}: StarBarProps) {
    const normalizedValue = Math.max(0, Math.min(stars, value))

    const entirePart = Math.floor(value)
    const decimalPart = value % 1 * 100

    function getPercentageForIndex(i: number) {
        if (i < entirePart) {
            return 100
        } else if (i === entirePart) {
            return decimalPart
        } else {
            return 0
        }
    }

    const starIcons = [...Array(stars)].map((_, i) =>
        <StarIcon size={size} percentage={getPercentageForIndex(i)}/>
        )
    
    return (
        <div className={styles.star_bar}>
            {starIcons}
        </div>
    );
}