import React from 'react';
import Card from './Card'; 
import '../app.css'; 

function Assignments() {
  return (
    <div className="main-content"> 
      <div className="scrollable-content">
        <section id="header" style={{textAlign: "center"}}>
          <h1>My Assignments</h1>
        </section>
        <div className="cards-container">
          <Card
            icon="bx bxs-building-house"
            heading="About"
            paragraph="Lorem ipsum dolor sit. Ea earum, deleniti maiores saepe voluptates voluptas aperiam quae!"
          />
          <Card
            icon="bx bxs-building-house"
            heading="About"
            paragraph="Lorem ipsum dolor sit. Ea earum, deleniti maiores saepe voluptates voluptas aperiam quae!"
          />
          <Card
            icon="bx bxs-building-house"
            heading="About"
            paragraph="Lorem ipsum dolor sit. Ea earum, deleniti maiores saepe voluptates voluptas aperiam quae!"
          />
          <Card
            icon="bx bxs-building-house"
            heading="About"
            paragraph="Lorem ipsum dolor sit. Ea earum, deleniti maiores saepe voluptates voluptas aperiam quae!"
          />
          <Card
            icon="bx bxs-building-house"
            heading="About"
            paragraph="Lorem ipsum dolor sit. Ea earum, deleniti maiores saepe voluptates voluptas aperiam quae!"
          />
          <Card
            icon="bx bxs-building-house"
            heading="About"
            paragraph="Lorem ipsum dolor sit. Ea earum, deleniti maiores saepe voluptates voluptas aperiam quae!"
          />
        </div>
      </div>
    </div>
  );
}

export default Assignments;
