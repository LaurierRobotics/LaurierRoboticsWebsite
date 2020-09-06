import React, { useState } from "react";
import { } from "./Events.css";
import Modal from 'react-modal';
import { Link, Route, Switch, BrowserRouter, NavLink } from 'react-router-dom';
import EventDetails from "./EventDetails";

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
      image: "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
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
      <div className="card" style={{ width: '18rem', margin: '1rem' }} key={index}>
        <img className="card-img-top" src={card.image} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.text}</p>
          <NavLink
            className="nav-link"
            activeClassName="active"
            to={{
              pathname: "/admin/eventDetails",
              cardProp: {
                // card: card,
                image: card.image,
                title: card.title,
                text: card.text
              }
            }}>
            View Details
          </NavLink>
        </div>
      </div>
    );
  };

  const renderEventModal = (card) => {
    setIsOpen(true);
    console.log("Pressed!")
    return (
      // <Modal
      //   isOpen={isOpen}
      //   onRequestClose={() => setIsOpen(false)}
      //   style={
      //     {
      //       overlay: {
      //         backgroundColor: 'grey'
      //       },
      //       content: {
      //         color: 'purple'
      //       }
      //     }
      //   }>
      //   {/* <img src={image}></img> */}
      //   <h2 style={{ textAlign: 'center' }}>{card.title}</h2>
      //   <p style={{ textAlign: 'center' }}>{card.text}</p>
      //   <a href="#" style={{ textAlign: 'center' }}>Event Details</a>
      //   <button onClick={() => setIsOpen(false)}>Close</button>
      // </Modal>
      <EventDetails />
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
      {/* <BrowserRouter>
        <Switch>
          <Route path="/eventDetails" component={EventDetails} />
        </Switch>
      </BrowserRouter> */}
      {cardInfo.length > 0 && renderAllItems()}
      {cardInfo.length === 0 && renderNoItems()}
    </>
  );
}

export default Events;