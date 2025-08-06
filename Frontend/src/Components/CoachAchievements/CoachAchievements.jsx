import React from "react";
import styles from "./CoachAchievements.module.css";
import AchievementCard from "./AchievementCard";

const CoachAchievements = ({ achievements }) => {
  return (
    <div>
      <div className={`${styles["cards-container"]} container`}>
        <div className={`${styles["all-achievements"]} row`}>
          {achievements.map((achievement, index) => (
            <div className={`${styles["achievement-card"]}`} key={index}>
              <AchievementCard achievement={achievement} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachAchievements;
