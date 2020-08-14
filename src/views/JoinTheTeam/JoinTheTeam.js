import React from "react";
import "./JoinTheTeam.css";

class JoinTheTeam extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <p>Even if you don't meet the qualifications feel free to apply.</p>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Position</th>
                <th scope="col">Job Category</th>
                <th scope="col">Qualifications</th>
                {/*<th scope="col">Description</th>*/}
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Software Engineer</th>
                <td>Software</td>
                <td>Basic understanding of computer vision, Tensorflow, python and deep learning neural networks</td>
                {/* <td>N/A</td> */}
                <td>baig9620@mylaurier.ca</td>
              </tr>
              <tr>
                <th scope="row">Software Engineer</th>
                <td>Software</td>
                <td>Basic understanding of computer vision, Tensorflow, python and deep learning neural networks</td>
                {/* <td>N/A</td> */}
                <td>baig9620@mylaurier.ca</td>
              </tr>
              <tr>
                <th scope="row">Hardware Engineer</th>
                <td>Hardware</td>
                <td>Experience with 3D modeling systems and autodesk inventor, an understanding of circuits and a willingness to learn</td>
                {/* <td>N/A</td> */}
                <td>kawa0080@mylaurier.ca</td>
              </tr>
              <tr>
                <th scope="row">Hardware Engineer</th>
                <td>Hardware</td>
                <td>Experience with 3D modeling systems and autodesk inventor, an understanding of circuits and a willingness to learn</td>
                {/* <td>N/A</td> */}
                <td>kawa0080@mylaurier.ca</td>
              </tr>
            </tbody>
          </table>
          <p>Feel free to Email the address in the "EMAIL" column if you are interested in any of the positions available. If there are no positions listed, we still welcome you to reach out to us at
          <a href="mailto:lauriobotics@gmail.com">
              {' '}lauriobotics@gmail.com
          </a>.
          </p>
          <p>Everyone, of different colours, regions, beliefs, and genders are welcome.</p>
        </div>
      </>
    );
  }
}

export default JoinTheTeam;
