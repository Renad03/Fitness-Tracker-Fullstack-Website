// CoachWrapper.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Coach from "../../Pages/Home/CoachScreen/Coach"; // adjust path if needed

const CoachWrapper = () => {
  const { id } = useParams();
  return <Coach coachId={id} />;
};

export default CoachWrapper;
