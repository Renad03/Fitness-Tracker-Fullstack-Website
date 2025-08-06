
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styles from "./profilePicture.module.css";
import { useState, useRef, useEffect } from 'react';

const ProfilePictures = ({profilePhoto , coachName , coachBio}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handleAvatarClick = () => {
    fileInputRef.current.click();
    };

    const handleSaveImageLocally = () => {
        if (selectedImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
            localStorage.setItem('profileImage', reader.result);
            console.log('Image saved');
            };
            fetch(selectedImage)
            .then(res => res.blob())
            .then(blob => reader.readAsDataURL(blob));
        } else {
            console.warn('No image selected to save');
        }
    };

    useEffect(() => {
        const storedImage = localStorage.getItem('profileImage');
        if (storedImage) {
            setSelectedImage(storedImage);
        }
    }, []);

    return (
        <div>
            <div className={`${styles["profile-photo-container"]}`}>
                <Stack direction="row" spacing={2}>
                    <Avatar
                        className={`${styles["profile-photo"]}`}
                        sx={{ width: 179.82, height: 179.82, cursor: 'pointer'}}
                        alt="Profile photo"
                        src={profilePhoto} 
                        onClick={handleAvatarClick}
                    />
                </Stack>
                <div className={`${styles["content"]}`}>
                    <h1>{coachName}</h1>
                    <p>{coachBio}</p>
                </div>
            </div>
            <input
                type="file"
                accept="image/*" 
                onChange={handleImageChange}
                style={{ display: 'none' }}
                ref={fileInputRef} 
            />
            <button style={{ display: 'none' }} onClick={handleSaveImageLocally}>Save</button>
        </div>
    );
};

export default ProfilePictures;