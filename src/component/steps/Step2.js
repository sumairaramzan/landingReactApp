import React, { useState } from "react";
import "./step.css";

const Step2 = ({ onComplete }) => {
  const [formData, setFormatData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { ...formData };

    try {
      const response = await fetch(
        "http://howapp.urdulibrary.net/createNewUser",
        {
          method: "POST",
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("User registered successfully:", data);
        setMessage("Registration successful!");

        setIsError(false);
        onComplete();
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData.message);
        setMessage(errorData.message || "Registration failed!");
        setIsError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
      setIsError(true);
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormatData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  return (
    <div className="container form-container">
      <div className="row justify-content-center">
        <div className="col-md-4 ">
          <form className="custom-form-new" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Next</button>
          </form>
          {message && (
            <div
              className={`alert mt-3 ${
                isError ? "alert-danger" : "alert-success"
              }`}
              role="alert"
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step2;
