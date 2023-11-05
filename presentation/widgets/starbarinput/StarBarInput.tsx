import styles from "./StarBarInput.module.scss";
import {Dispatch, useState} from "react";
import StarIcon from "../staricon/StarIcon";

interface StarBarInputProps {
    stars?: number
    size?: number
    onChange: Dispatch<number>
}

export default function StarBarInput({stars = 5, size = 1, onChange} : StarBarInputProps) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null)

    const starIcons = [...Array(stars)].map((_, i) => {
        const currentRating = i + 1;
        
        function updateRating(newRating) {
            setRating(newRating)
            onChange(newRating)
        }

        return (
            <label
                className={styles.star}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}>
                <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => updateRating(currentRating)}/>
                <StarIcon size={size} percentage={currentRating <= (hover || rating) ? 100 : 0}/>
            </label>
            )
    })
    
    return(
        <div className={styles.star_bar}>
            {starIcons}
        </div>
    )
}