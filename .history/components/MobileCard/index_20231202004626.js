import * as Progress from 'react-native-progress';
import styles from "./MobileCard.module.css";

export default function ProgressBar({ progress }){

    const getBarColor = (progress) => {
        if (progress >= 1) {
          return '#B04121'; // Red when progress is 100%
        } else if (progress >= 0.7) {
          return '#E58331'; // Orange when progress is between 70% and 99%
        } else { 
          return '#6AB4AC'; // Blue when progress is below 70%
        }
      }

    return (
        <Progress.Bar
            style={styles.progress_bar}
            progress={progress}
            color={getBarColor(progress)}
            width={350}
            height={5}
        />
    )
    
}
