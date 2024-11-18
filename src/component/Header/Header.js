import React from "react";

const Header = ({ cardImg, cardTitle, cardText, cardButton }) => {
  return (
    <>
      <div className="card w-25">
        <img src={cardImg} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardText}.</p>
          <a href="#" className="btn btn-primary">
            {cardButton}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
