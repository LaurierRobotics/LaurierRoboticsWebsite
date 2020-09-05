import AboutUs from "views/AboutUs/AboutUs.js";
import ContactUs from "views/ContactUs/ContactUs.js";
import Events from "views/Events/Events.js";
import HomePage from "views/HomePage/HomePage.js";
import JoinTheTeam from "views/JoinTheTeam/JoinTheTeam.js";
import MeetTheTeam from "views/MeetTheTeam/MeetTheTeam.js";
import Projects from "views/Projects/Projects.js";
import Sponsership from "views/Sponsership/Sponsership.js";
import EventDetails from "views/Events/EventDetails";

var routes = [
  {
    path: "/homepage",
    name: "Home Page",
    icon: "nc-icon nc-bank",
    component: HomePage,
    layout: "/admin",
  },
  {
    path: "/aboutus",
    name: "About Us",
    icon: "nc-icon nc-alert-circle-i",
    component: AboutUs,
    layout: "/admin",
  },
  {
    path: "/meettheteam",
    name: "Meet The Team",
    icon: "nc-icon nc-badge",
    component: MeetTheTeam,
    layout: "/admin",
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "nc-icon nc-ruler-pencil",
    component: Projects,
    layout: "/admin",
  },
  {
    path: "/events",
    name: "Events",
    icon: "nc-icon nc-planet",
    component: Events,
    layout: "/admin",
  },
  {
    path: "/sponsership",
    name: "Sponsorship",
    icon: "nc-icon nc-briefcase-24",
    component: Sponsership,
    layout: "/admin",
  },
  {
    path: "/jointheteam",
    name: "Join The Team",
    icon: "nc-icon nc-favourite-28",
    component: JoinTheTeam,
    layout: "/admin",
  },
  {
    path: "/eventDetails",
    name: "Event Details",
    icon: "nc-icon nc-favourite-28",
    component: EventDetails,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/contactus",
    name: "Contact Us",
    icon: "nc-icon nc-send",
    component: ContactUs,
    layout: "/admin",
  },
];
export default routes;
