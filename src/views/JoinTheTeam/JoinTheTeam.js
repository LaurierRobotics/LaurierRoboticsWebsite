import React from "react";


class JoinTheTeam extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          {/* CODE GOES HERE INSIDE THE <DIV> */}
          <p style={{ fontFamily: "'Roboto', sans- serif" }}>Even if you don't meet the qualifications feel free to apply.</p>
          <table class="table table-dark">
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
                <th scope="row">Software Engineer</th>
                <td>Software</td>
                <td>Basic understanding of computer vision, Tensorflow, python and deep learning neural networks</td>
                {/* <td>N/A</td> */}
                <td>baig9620@mylaurier.ca</td>
              </tr>
              <tr>
                <th scope="row">Hardware Engineer</th>
                <td>Hardware</td>
                <td>Basic understanding of remote control cars, Arduino/Raspberry Pi and electric circuits</td>
                {/* <td>N/A</td> */}
                <td>kawa0080@mylaurier.ca</td>
              </tr>
              <tr>
                <th scope="row">Hardware Engineer</th>
                <td>Hardware</td>
                <td>Basic understanding of remote control cars, Arduino/Raspberry Pi and electric circuits</td>
                {/* <td>N/A</td> */}
                <td>kawa0080@mylaurier.ca</td>
              </tr>
              <tr>
                <th scope="row">Hardware Engineer</th>
                <td>Hardware</td>
                <td>Basic understanding of remote control cars, Arduino/Raspberry Pi and electric circuits</td>
                {/* <td>N/A</td> */}
                <td>kawa0080@mylaurier.ca</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontFamily: "'Roboto', sans- serif" }}>Feel free to Email the address in the "EMAIL" column if you are interested in any of the positions available. If there are no positions listed, we still welcome you to reach out to us at
          <a href="mailto:lauriobotics@gmail.com">
              {' '}lauriobotics@gmail.com
          </a>.
          </p>
          <p style={{ fontFamily: "'Roboto', sans- serif" }}>Everyone, of different color, region, beliefs, and gender are welcome.</p>
        </div>
      </>
    );
  }
}

export default JoinTheTeam;
