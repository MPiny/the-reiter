import styles from "../styles/Home.module.css";
import ThemeSwitcher from "../presentation/widgets/themeswitcher/ThemeSwitcher";
import StarBar from "../presentation/widgets/starbar/StarBar";
import StarBarInput from "../presentation/widgets/starbarinput/StarBarInput";
import {useState} from "react";

export default function Home() {
  const [rating, setRating] = useState(0)
  
  return (
      <div className={styles.container}>
        <StarBar size={2} value={3.5} />
        <StarBarInput size={2} onChange={setRating} />
        <a href="www.google.com">google Rated: {rating}</a>
        <ThemeSwitcher />
      </div>
  );
}
