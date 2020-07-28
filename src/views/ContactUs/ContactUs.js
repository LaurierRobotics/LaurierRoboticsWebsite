import IG from 'assets/img/IG.png';
import Link from 'assets/img/Link.png';
import axios from 'axios';
import React from "react";
import { } from "./ContactUs.css";
class ContactUs extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.c })
  }
  async handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = this.state
    const form = await axios.post('/api/form', { name, email, message })
  }
  render() {
    return (
      <>
        <div className="content">
          <p>For any questions or messages you have, please send us an email at </p>
          <p>
            <a href="mailto:lauriobotics@gmail.com">
              lauriobotics@gmail.com
            </a>
          </p>
          <br />
          <p>For inquiries about sponsership, please send us an email at </p>
          <p>
            <a href="mailto:dang1370@mylaurier.ca">
              dang1370@mylaurier.ca
            </a>
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>Follow and connect with us on Instagram and LinkedIn to stay up to date on the latest news !</p>
          <ul>
            <li>
              <a href="https://www.instagram.com/laurierrobotics/" target="blank">
                <img id='igmedia' src={IG} alt="Instagram logo" />
              </a>
              <a href="https://www.linkedin.com/company/laurier-robotics/?viewAsMember=true" target="blank">
                <img id='limedia' src={Link} alt="Linkedin logo" />
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default ContactUs;


{/* <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                name="name"
                onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email:</Label>
              <Input
                type="email"
                name="email"
                onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message:</Label>
              <Input
                type="textarea"
                name="message"
                onChange={this.handleChange} />
            </FormGroup>
            <Button>Submit</Button>
          </Form> */}