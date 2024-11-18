import React from "react";
import Calendar from "../component/Calender";
import profile1 from "../Images/profile1.svg";
import profile2 from "../Images/profile2.svg";
import profile3 from "../Images/profile3.svg";
import profile4 from "../Images/profile4.svg";

function Dashboard() {
  return (
    <div>
      <h2 className="mb-5">Calender</h2>
      <div className="container mb-3">
        <form class="row gx-3 gy-2 align-items-center custom-form">
          <div class="col-md-6 col-lg-4">
            <label for="inputZip" class="form-label">
              Zip/Postal Code
            </label>
            <input
              type="text"
              class="form-control"
              id="inputZip"
              placeholder="Text here"
            />
          </div>

          <div class="col-md-6 col-lg-2">
            <button type="button" class="btn btn-primary w-100 mt-4">
              Search
            </button>
          </div>

          <div class="col-md-6 col-lg-3">
            <label for="inputMake" class="form-label">
              Make
            </label>
            <select class="form-select" id="inputMake">
              <option selected>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="col-md-6 col-lg-3">
            <label for="inputModel" class="form-label">
              Model
            </label>
            <select class="form-select" id="inputModel">
              <option selected>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="col-md-6 col-lg-3">
            <label for="inputZip2" class="form-label">
              Zip/Postal Code
            </label>
            <input
              type="text"
              class="form-control"
              id="inputZip2"
              placeholder="Text here"
            />
          </div>

          <div class="col-md-6 col-lg-3">
            <label for="inputCity" class="form-label">
              City
            </label>
            <select class="form-select" id="inputCity">
              <option selected>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="col-12">
            <a class="text-dark" href="#">
              show less
            </a>
          </div>
        </form>

        <div class="d-flex justify-content-end align-items-end my-3">
          <a class="text-dark text-end" href="#">
            Export
          </a>
        </div>

        {/* calender */}
        <div className="custom-form row">
          <div className="col-md-9"><Calendar /></div>
          <div className="col-md-3">
            <div className="activity">
              <h5>Activity Information</h5>
              <ul>
                <li className="confirmed">Confirmed</li>
                <li className="in-progress">In Progress</li>
                <li className="pending">Pending</li>
                <li className="cancel">Cancel</li>
              </ul>
            </div>
            <div className="profile-section">
              <h5>Recent Activity</h5>
              <ul>
                <li className="profile-item">
                  <img src={profile1} alt="Profile 1" className="profile-img" />
                  <div className="profile-info">
                    <h6>Profile Heading 1</h6>
                    <p className="profile-date">September 8, 2024</p>
                    <p className="profile-name">John Doe</p>
                  </div>
                </li>
                <li className="profile-item">
                  <img src={profile2} alt="Profile 2" className="profile-img" />
                  <div className="profile-info">
                    <h6>Profile Heading 2</h6>
                    <p className="profile-date">September 9, 2024</p>
                    <p className="profile-name">Jane Smith</p>
                  </div>
                </li>
                <li className="profile-item">
                  <img src={profile3} alt="Profile 2" className="profile-img" />
                  <div className="profile-info">
                    <h6>Profile Heading 2</h6>
                    <p className="profile-date">September 9, 2024</p>
                    <p className="profile-name">Jane Smith</p>
                  </div>
                </li>
                <li className="profile-item">
                  <img src={profile4} alt="Profile 2" className="profile-img" />
                  <div className="profile-info">
                    <h6>Profile Heading 2</h6>
                    <p className="profile-date">September 9, 2024</p>
                    <p className="profile-name">Jane Smith</p>
                  </div>
                </li>
                {/* Add more profile items as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
