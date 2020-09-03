import React, { useState } from "react";
import { } from "./Events.css";
import { Card } from "react-bootstrap";
import photo1 from '../../assets/img/ahmardp.jpg';
import Modal from 'react-modal';

const Events = () => {
  // return (
  //   <>
  //     <div className="content">
  //       {/* CODE GOES HERE INSIDE THE <DIV> */}
  //       <h2 id="h2">Coming Soon...</h2>
  //     </div>
  //   </>
  // );
  const cardInfo = [
    {
      image: photo1,
      title: "Welcome Event",
      text: "First event of the year",
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      title: "Alex Caruso",
      text: "THE TRUE GOAT",
    },
    {
      image:
        "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
      title: "Steph Curry",
      text: "he good",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box" id="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  const evalModal = (card) => {
    console.log("Pressed")
    setIsOpen(!isOpen);
    if (isOpen) {
      renderEventModal(card.title, card.image, card.text);
    }
  }

  const renderEventModal = (title, image, text) => {
    return (
      <div id="modal-div">
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={
            {
              overlay: {
                backgroundColor: 'grey'
              },
              content: {
                color: 'purple'
              }
            }
          }>
          {/* <img src={image}></img> */}
          <h2 style={{ textAlign: 'center' }}>{title}</h2>
          <p style={{ textAlign: 'center' }}>{text}</p>
          <a href="#" style={{ textAlign: 'center' }}>Event Details</a>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
      </div>
    );
  }

  const renderAllItems = () => {
    return (
      <div className="content" id="events-div">
        {cardInfo.map(renderCard)}
      </div>
    );
  }

  const renderNoItems = () => {
    return (
      <div className="content">
        {/* CODE GOES HERE INSIDE THE <DIV> */}
        <h2 id="events-h2">No events yet</h2>
      </div>
    );
  }

  return (
    <>
      {cardInfo.length > 0 && renderAllItems()}
      {cardInfo.length === 0 && renderNoItems()}
    </>
  );
}

export default Events;