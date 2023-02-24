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
                  <img alt="..." src={require("assets/img/copresbg.jpg")} />
                </div>
                <CardBody>
                  <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/lakshya.jpeg")}
                    />
                    #
                    <h2>
                      Lakshya Kawatra <br />
                      Co-President
                    </h2>
                    <h3>Program: Computer Science and Business</h3>
                    <h3>Year: 4</h3>
                    <h3>
                      LinkedIn: {""}
                      <a
                        href="https://www.linkedin.com/in/lakshyakawatra/"
                        target="blank"
                      >
                        @Lakshya Kawatra
                      </a>
                    </h3>
                    <h3>
                      Email: {""}
                      <a href="mailto:kawa0080@mylaurier.ca" target="blank">
                        kawa0080@mylaurier.ca
                      </a>
                    </h3>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md="6">
              <Card className="card-user">
                <div className="image">
                  <img alt="..." src={require("assets/img/copresbg.jpg")} />
                </div>
                <CardBody>
                  <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/Yining-Zou.jpeg")}
                    />

                    <h2>
                      Yining Zou
                      <br /> Co-President
                    </h2>

                    <h3>Program: Finance and Business</h3>

                    <h3>Year: 4</h3>

                    <h3>
                      LinkedIn: {""}
                      <a
                        href="https://www.linkedin.com/in/yining-zou-81754b19b/"
                        target="blank"
                      >
                        @Yining Zou
                      </a>
                    </h3>

                    <h3>
                      Email: {""}
                      <a href="mailto:zoux0770@mylaurier.ca" target="blank">
                        zoux0770@mylaurier.ca
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
                  <img alt="..." src={require("assets/img/financebg.jpg")} />
                </div>
                <CardBody>
                  <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/Ezekiel.png")}
                    />

                    <h2>
                      Ezekiel Abrahams <br /> VP of Finance
                    </h2>

                    <h3>Program: BBA, minor in CS</h3>

                    <h3>Year: 3</h3>

                    <h3>
                      LinkedIn: {""}
                      <a
                        href="https://www.linkedin.com/in/ezekielabrahams/"
                        target="blank"
                      >
                        @Ezekiel Abrahams
                      </a>
                    </h3>

                    <h3>
                      Email: {""}
                      <a href="mailto:abra5230@mylaurier.ca" target="blank">
                        abra5230@mylaurier.ca
                      </a>
                    </h3>

                    <h3>Team Members: Not Available ATM</h3>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  //
                  <img alt="..." src={require("assets/img/copresbg.jpg")} />
                </div>
                <CardBody>
                  <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/Dhanush-Mohan.jpeg")}
                    />

                    <h2>
                      Vinoshan Ranjanathan (Vino) <br /> VP of Outreach
                    </h2>

                    <h3>Program: BBA and Computer Science</h3>

                    <h3>Year: 2</h3>

                    <h3>
                      LinkedIn: {""}
                      <a
                        href="https://www.linkedin.com/in/dhanush-mohan-kumar-23790b184/"
                        target="blank"
                      >
                        @Vino
                      </a>
                    </h3>

                    <h3>
                      Email: {""}
                      <a href="mailto:nada0500@mylaurier.ca" target="blank">
                        nada0500@mylaurier.ca
                      </a>
                    </h3>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img alt="..." src={require("assets/img/softwarebg.jpg")} />
                </div>
                <CardBody>
                  <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/Dev-patel.jpg")}
                    />

                    <h2>
                      Dev Patel <br /> VP of WebDev
                    </h2>

                    <h3>Program:Computer Science</h3>

                    <h3>Year: 2</h3>

                    <h3>
                      LinkedIn: {""}
                      <a
                        href="https://www.linkedin.com/in/devpatel7878/"
                        target="blank"
                      >
                        @Dev Patel
                      </a>
                    </h3>

                    <h3>
                      Email: {""}
                      <a href="mailto:pate5400@mylaurier.ca" target="blank">
                        pate5400@mylaurier.ca
                      </a>
                    </h3>

                    <h3>Team Members:</h3>
                    <h3>Team Members: Not Available ATM</h3>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img alt="..." src={require("assets/img/softwarebg.jpg")} />
                </div>
                <CardBody>
                  <h2>General Members</h2>
                  <h4>
                    <ol id="teamNames">
                      <li>Ali Ahmed</li>
                      <li>Priyanshu Shah</li>
                      <li>Natalie Tyson</li>
                      <li>Rayaan Khan</li>
                      <li>Adnan Huud Badri</li>
                      <li>Zaina Basit Alavi</li>
                      <li>Shubham Patel</li>
                      <li>Marushen Baskaran</li>
                      <li>Smaran Rane</li>
                    </ol>
                  </h4>
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
