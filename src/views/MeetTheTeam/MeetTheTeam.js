import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import "./meettheteam.css";

// name position program+year Email+LinkedIn

class MeetTheTeam extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>

            <Col md="6">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/copresbg.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/laithdp.jpeg")}
                    />

                    <h2>Laith Adi <br /> Co-President</h2>

                    <h3>Program: Computer Science and Mathematics</h3>

                    <h3>Year: 3</h3>

                    <h3>
                      LinkedIn: {''}
                      <a href="https://www.linkedin.com/in/laithadi/" target="blank">
                        @Laith Adi
                        </a>
                    </h3>

                    <h3>
                      Email: {''}
                      <a href="mailto:adix5190@mylaurier.ca" target="blank">
                        adix5190@mylaurier.ca
                        </a>
                    </h3>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md="6">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/copresbg.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/mike.jpg")}
                    />

                    <h2>Mathuran Mangaleswaran <br /> Co-President</h2>

                    <h3>Program: Computer Science</h3>

                    <h3>Year: 3</h3>

                    <h3>
                      LinkedIn: {''}
                      <a href="http://linkedin.com/in/mathuran-mangaleswaran-1a721b175" target="blank">
                        @Mathuran Mangaleswaran
                        </a>
                    </h3>

                    <h3>
                      Email: {''}
                      <a href="mailto:mailto:mang8970@mylaurier.ca" target="blank">
                        mang8970@mylaurier.ca
                        </a>
                    </h3>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>

            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/hardwarebg.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/mike.jpg")}
                    />

                    <h2>Lakshya Kawatra <br /> VP of Hardware</h2>

                    <h3>Program: Computer Science</h3>

                    <h3>Year: 2</h3>

                    <h3>
                      LinkedIn: {''}
                      <a href="https://www.linkedin.com/in/ahmar-baig-915a47177/" target="blank">
                        @Lakshya Kawatra
                        </a>
                    </h3>

                    <h3>
                      Email: {''}
                      <a href="mailto:kawa0080@mylaurier.ca" target="blank">
                        kawa0080@mylaurier.ca
                        </a>
                    </h3>

                    <h3>
                      Team Members: Not Available ATM
                    </h3>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/softwarebg.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/ahmardp.jpg")}
                    />

                    <h2>Ahmar Baig <br /> VP of Software</h2>

                    <h3>Program: Computer Science</h3>

                    <h3>Year: 3</h3>

                    <h3>
                      LinkedIn: {''}
                      <a href="https://www.linkedin.com/in/ahmar-baig-915a47177/" target="blank">
                        @Ahmar Baig
                        </a>
                    </h3>

                    <h3>
                      Email: {''}
                      <a href="mailto:baig9620@mylaurier.ca" target="blank">
                        baig9620@mylaurier.ca
                        </a>
                    </h3>

                    <h3>
                      Team Members:
                    </h3>
                    <ul id="teamNames">
                      <li> Saif Al-Din Ali </li>
                      <li> Alex Polus</li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/financebg.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/maidp.jpg")}
                    />

                    <h2>Mai Dang <br /> VP of Finance</h2>

                    <h3>Program: BBA</h3>

                    <h3>Year: 2</h3>

                    <h3>
                      LinkedIn: {''}
                      <a href="https://www.linkedin.com/in/mai-dang-9a5b9b168/" target="blank">
                        @Mai Dang
                        </a>
                    </h3>

                    <h3>
                      Email: {''}
                      <a href="mailto:dang1370@mylaurier.ca" target="blank">
                        dang1370@mylaurier.ca
                        </a>
                    </h3>

                    <h3>
                      Team Members: Not Available ATM
                    </h3>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </div>
      </>
    );
  }
}

export default MeetTheTeam;
