import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Home from "./Pages/Home/Home";
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./Components/Auth/Login";
import Layout from "./Components/Layout";
import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";
import OurPlans from "./Components/PlanSection/OurPlans";
import SliderSection from "./Components/Slider/Slider";
import AboutUs from "./Components/AboutUs";
import WeightLossProgram from "./Components/WeightLoss";
import BuildingMusclesProgram from "./Components/BuildingMuscles";
import HomeWorkoutProgram from "./Components/HomeWorkout";
import GymPlanProgram from "./Components/GymPlan";
import FitnessGroupProgram from "./Components/FitnessGroup";
import AccordionSection from "./Components/Accordion/AccordionSection";
import OurServices from "./Components/ServicesSection/OurServices";
import OneOnOneCoaching from "./Components/OneOnOneCoaching";
import GroupCoaching from "./Components/GroupCoaching";
import MemberShip from "./Components/Membership";
import OnlineCoaching from "./Components/OnlineCoaching";
import NutritionCoaching from "./Components/NutritionCoaching";
import BMICalculator from './Components/FitnessTools/BMI-calculator';
import CalorieCalculator from './Components/FitnessTools/Calorie-calculator';
import MacronutrientCalculator from './Components/FitnessTools/Macronutrient-calculator';
import GoalSettingTool from './Components/FitnessTools/Goal-Setting-Tool';
import GymBookingForm from './Components/BookingScreen/GymBookingForm';
import Register from "./Components/Auth/Register";
import CoachWrapper from "./Components/CoachWrapper";
import UserProfile from "./Components/UserProfile/UserProfile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path: "coach/:id",
        element: <CoachWrapper />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {  
        path: "register",  
        element: <Register />},
      {
        path: "our-plans",
        element: <OurPlans />,
      },
      {
        path: "trainers",
        element: <SliderSection />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "weight-loss",
        element: <WeightLossProgram />,
      },
      {
        path: "building-muscles",
        element: <BuildingMusclesProgram />,
      },
      {
        path: "home-workout",
        element: <HomeWorkoutProgram />,
      },
      {
        path: "gym-plan",
        element: <GymPlanProgram />,
      },
      {
        path: "fitness-group",
        element: <FitnessGroupProgram />,
      },
      {
        path: "faq",
        element: <AccordionSection />,
      },
      {
        path: "our-services",
        element: <OurServices />,
      },
      {
        path: "one-on-one-coaching",
        element: <OneOnOneCoaching />,
      },
      {
        path: "group-coaching",
        element: <GroupCoaching />,
      },
      {
        path: "membership",
        element: <MemberShip />,
      },
      {
        path: "online-coaching",
        element: <OnlineCoaching />,
      },
      {
        path: "nutrition-coaching",
        element: <NutritionCoaching />,
      },
      {
        path: "bmi-calculator",
        element: <BMICalculator />,
      },
      {
        path: "calorie-calculator",
        element: <CalorieCalculator />,
      },
      {
        path: "macro-calculator-1",
        element: <MacronutrientCalculator />,
      },
      {
        path: "goal-setting",
        element: <GoalSettingTool />,
      },
      {
        path: "booking",
        element: <GymBookingForm />,
      }
    ],
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "home",
        element: <DashboardHome />,
      },
    ],
  },
  
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
