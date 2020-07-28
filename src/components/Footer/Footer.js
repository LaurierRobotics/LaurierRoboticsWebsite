import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <Row>
            {/* <nav className="footer-nav">
              <ul>
                <li>
                  <a href="https://www.creative-tim.com" target="_blank">
                    Creative Tim
                  </a>
                </li>
              </ul>
            </nav> */}
            <div className="credits ml-auto">
              <div className="copyright">
                <i className="fa fa-heart heart" /> {1900 + new Date().getYear()}, Robotics Team
              </div>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
