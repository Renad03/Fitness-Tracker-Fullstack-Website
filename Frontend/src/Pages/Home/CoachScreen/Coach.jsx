import React, { useEffect, useState } from "react";
import ProfilePictures from "../../../Components/ProfilePicture/ProfilePictures";
import BackgroundPicture from "../../../Components/ProfileBackgroundPicture/BackgroundPicture";
import Button from "@mui/material/Button";
import styles from "./coach.module.css";
import ProfileAbout from "../../../Components/ProfileAbout/ProfileAbout";
import CoachAchievements from "../../../Components/CoachAchievements/CoachAchievements";
import Slider from "../../../Components/Slider/Slider";
import axios from "axios";
import femaleAvatar from 'E:/Renad/My-Projects/Fitness-Tracker/fitness-final-project/Frontend/src/Assets/images/female-avatar.png';
import maleAvatar from 'E:/Renad/My-Projects/Fitness-Tracker/fitness-final-project/Frontend/src/Assets/images/male-avatar.png'
const Coach = ({ coachId }) => {
  const [coachData, setCoachData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoach = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/trainers/${coachId}`);
        setCoachData(response.data);
      } catch (err) {
        setError("Failed to fetch coach data");
        console.error(err);
      }
    };

    fetchCoach();
  }, [coachId]);

  if (error) return <div>{error}</div>;
  if (!coachData) return <div>Loading...</div>;
   const defaultAvatar = coachData?.gender === 'Female' ? femaleAvatar : maleAvatar;
  return (
    <div>
      <header className={`${styles}`}>
        <div className={`${styles["main-profile"]} container`}>
          <div className={`${styles["profile-background"]}`}>
            <BackgroundPicture />
          </div>
          <div className={`${styles["profile-picture-content"]}`}>
            <ProfilePictures
              profilePhoto={defaultAvatar}
              coachName={coachData.name}
              coachBio={coachData.role}
            />
          </div>
          <div className={`${styles["contact-container"]}`}>
            <Button
              sx={{
                color: "var(--white-color)",
                backgroundColor: "var(--red-main-color)",
                padding: 1,
                textTransform: "none",
              }}
              size="small"
            >
              Message
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div
          className={`container ${styles["main-container"]} d-flex justify-content-between`}
        >
          <div className={`${styles["aside-about"]}`}>
            <ProfileAbout
              gender={coachData.gender}
              birthday={coachData.birthday}
              address={coachData.address}
              email={coachData.email}
              phone={coachData.phoneNumber}
            />
          </div>
          {
          <div className={`${styles["container"]} achievements`}>
            <CoachAchievements achievements={coachData.achievements || []} />
          </div> 
          }
        </div>
        <div className={`${styles["other-coaches"]}`}>
          <Slider />
        </div>
      </main>
    </div>
  );
};

export default Coach;
