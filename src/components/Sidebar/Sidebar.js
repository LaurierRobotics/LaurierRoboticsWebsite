// javascript plugin used to create scrollbars on windows
// import { NULL } from "node-sass";
//import Robotics from '../../assets/img/Robotics.png';
import logo from "assets/img/logo.png";
import PerfectScrollbar from "perfect-scrollbar";
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import {} from "./Sidebar.css";
var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div id="logo" className="logo">
          {/* <a
            href="/"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={NULL} alt="react-logo" />
            </div>
          </a> */}
          <a href="/admin/homepage" className="simple-text logo-normal">
            Laurier Robotics
          </a>
          <img id="imageLogo" src={logo} alt="Logo" />
        </div>
        <div className="sidebar-wrapper" ref={this.sidebar}>
          <Nav>
            {this.props.routes.map((prop, key) => {
              if (prop.name !== "Event Details") {
                return (
                  <li
                    className={
                      this.activeRoute(prop.path) +
                      (prop.pro ? " active-pro" : "")
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              }
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
