import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faBirthdayCake, faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './profileAbout.module.css'; 


const ProfileAbout = ({ gender, birthday, address, email, phone}) => {
        return (
            <div className={`${styles["profile-about-container"]}`}>
                <h2 className={`${styles["about-title"]}`}>About</h2>

                <div className={`${styles["info-item"]}`}>
                    <FontAwesomeIcon icon={faMale} className={`${styles["icon"]}`} />
                    <span className={`${styles["info-text"]}`}>{gender}</span>
                </div>

                <div className={`${styles["info-item"]}`}>
                    <FontAwesomeIcon icon={faBirthdayCake} className={`${styles["icon"]}`} />
                    <span className={`${styles["info-text"]}`}>Born {birthday}</span>
                </div>

                <div className={`${styles["info-item"]}`}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className={`${styles["icon"]}`} />
                        <span className={`${styles["info-text"]}`}>{address}</span>
                </div>

                <div className={`${styles["info-item"]}`}>
                    <FontAwesomeIcon icon={faEnvelope} className={`${styles["icon"]}`} />
                    <span className={`${styles["info-text"]}`}>{email}</span>
                </div>

                <div className={`${styles["info-item"]}`}>
                    <FontAwesomeIcon icon={faPhone} className={`${styles["icon"]}`} />
                    <span className={`${styles["info-text"]}`}>{phone}</span>
                </div>
            </div>
        );
    };
    

export default ProfileAbout;