import React, { useState } from "react";

const EventDetails = (props) => {
  var s = props.location.cardProp;
  var list = [];

  for (var key in s) {
    if (s.hasOwnProperty(key)) {
      var value = s[key];
      list.push(value);
    }
  }
  console.log(list);
  return (
    <>
      <div className="content">
        <img src={list[0]}></img>
        <h1 id="h1">{list[1]}</h1>
        <h2 id="h2">{list[2]}</h2>
      </div>
    </>
  );
}
export default EventDetails;