import React from "react";
import "./step.css";

const Step3 = () => {
  return (
    <div className="container form-container">
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <form className="custom-form-new">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Step3;
