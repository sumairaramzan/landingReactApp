
import React from "react";
import "./carousel.css"
import MainCarousel from "./MainCarousel";
import CustomCarousel from "./CustomCarousel";

const Carousel = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center py-4 text-white custom-banner mb-3">
      <h2 className="mb-4">React Image Gallery</h2>
      <p>
        Responsive and flexible carousel component with thumbnail support for
        ReactJS
      </p>
      <div>
        <button className="btn-baner"  style={{ border: "none" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star me-2"
            viewBox="0 0 16 16"
          >
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z" />
          </svg>
          Star
        </button>
        <button className="btn-baner" style={{ border: "none" }}>
          32,30
        </button>
      </div>
    </div>
    {/* <MainCarousel/> */}
   <CustomCarousel />
    </>
   
  );
};

export default Carousel;
