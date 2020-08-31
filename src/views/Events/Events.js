import React from "react";
import { } from "./Events.css";
import { Card } from "react-bootstrap";
import photo1 from '../../assets/img/ahmardp.jpg';

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

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="content">
      {cardInfo.map(renderCard)}
    </div>
  );
}

export default Events;
