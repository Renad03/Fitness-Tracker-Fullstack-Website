import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {React, useMemo} from "react";
import { Link } from "react-router-dom";
import femaleAvatar from 'E:/Renad/My-Projects/Fitness-Tracker/fitness-final-project/Frontend/src/Assets/images/female-avatar.png';
import maleAvatar from 'E:/Renad/My-Projects/Fitness-Tracker/fitness-final-project/Frontend/src/Assets/images/male-avatar.png'
export default function SliderItem({ items, number }) {
  return (
    <div className="row">
      {items.map((item, i) => {
        const defaultAvatar = item?.gender === 'Female' ? femaleAvatar : maleAvatar;
        return (
          <div key={i} className={`col-${number}`}>
            <div className="slider-inner rounded-4">
              <img 
                src={defaultAvatar} 
                className="w-100 rounded-top-4" 
                alt={item.name} 
                style={{ height: '300px', objectFit: 'cover' }} 
              />
              
              <div className="bg-grey py-2 px-2.5 rounded-bottom-4">
                <h4 className="text-white fw-bold ">{item.name}</h4>
                <p className="text-light-grey fw-medium">{item.role}</p>
                <Link to={`/coach/${item._id}`} className="text-white d-flex align-items-center gap-2 text-decoration-none position-relative">
                  <span className="link-spotlight"></span>
                  <span>Learn More</span>
                  <FontAwesomeIcon icon={faArrowRightLong} className="text-red"/>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

