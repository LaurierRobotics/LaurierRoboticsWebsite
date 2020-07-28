import logo from 'assets/img/Robotics.png';
import React from "react";
// reactstrap components
import { } from "reactstrap";
import { } from "./AboutUs.css";
class AboutUs extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          {/* CODE GOES HERE INSIDE THE <DIV> */}
          <img id="team" src={logo} alt="Logo" />;
          <h3 id="ab1">Laurier Robotics</h3>
          <p id="p1">We are a group of students who share a passion for robotics and are dedicated to bring our knowledge and experience into the design and building of our robots. We strive to explore the field of robotics and we love to give the Laurier community opportunities to get involved by offering various workshops and events.</p>
          <h3 id="ab2">Our Mission Statement</h3>
          <p id="p2">Throughout several team meetings and events around the year, team members and students get a chance to design, build and program our robots and learn about the field of robotics. Each team member seeks to learn and grow, brings value not only to the club but also the Laurier community.</p>
        </div>
      </>
    );
  }
}
export default AboutUs;