import React from 'react';
import Card from './Card';
import '../app.css';  

function Dashboard() {
  return (
    <div className="main-content">
      <div className="scrollable-content">
        <section id="header">
          <h1>WELCOME ON BOARD OUR CHERISHED STUDENT</h1>
        </section>
        <div className="cards-container">
          <Card
            icon="bx bxs-building-house"
            heading="About"
            paragraph="Lorem ipsum dolor sit. Ea earum, deleniti maiores saepe voluptates voluptas aperiam quae!"
          />
          <Card
            icon="bx bxs-hand"
            heading="Home"
            paragraph="Ensure the CSS selectors match the elements you are trying to style."
          />
          <Card
            icon="bx bxl-postgresql"
            heading="Page"
            paragraph="Inline styles have higher specificity. If you want to use the styles from the CSS file, you should remove the inline styles or add !important to your CSS to override the inline styles:"
          />
        </div>
        <div className="view-all-container">
          <button className="view-all-button">View All</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
