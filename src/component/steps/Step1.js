import React, { useState } from "react";
import "./step.css";

const Step1 = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    auther: "",
    bookSize: "",
    totalPages: "",
    bookName: "",
  });
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [forms, setForms] = useState([
    {
      id: Date.now(),
      fields: {
        bookName: "",
        category: "",
        authorName: "",
        bookSize: "",
        totalPages: "",
        state: "",
      },
      imageFile: null,
    },
  ]);
  const [uploadStatus, setUploadStatus] = useState([]);
  const [apiResponse, setApiResponse] = useState(null);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleFileChange = (index, event) => {
    const updatedForms = forms.map((form, i) =>
      i === index ? { ...form, imageFile: event.target.files[0] } : form
    );
    setForms(updatedForms);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const userData = { ...formData };

  //   try {
  //     const response = await fetch(
  //       "http://howapp.urdulibrary.net/createNewUser",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(userData),
  //       }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("User registered successfully:", data);
  //       setMessage("Registration successful!");

  //       setIsError(false);
  //       onComplete();
  //     } else {
  //       const errorData = await response.json();
  //       console.error("Registration failed:", errorData.message);
  //       setMessage(errorData.message || "Registration failed!");
  //       setIsError(true);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setMessage("An error occurred. Please try again.");
  //     setIsError(true);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const statuses = await Promise.all(
        forms.map(async (form, index) => {
          if (!form.imageFile)
            return `Please select an image for form ${index + 1}`;

          const formData = new FormData();
          formData.append("image", form.imageFile, `file${index + 1}.jpg`);

          // Append other form fields if needed
          Object.keys(form.fields).forEach((key) => {
            formData.append(key, form.fields[key]);
          });

          const response = await fetch(
            "http://howapp.urdulibrary.net/uploadImage",
            {
              method: "POST",
              body: formData,
              headers: { Accept: "application/json" },
            }
          );

          const responseData = await response.json();
          console.log(`Response for form ${index + 1}:`, responseData);

          if (response.ok) {
            setApiResponse(responseData);
            return `Form ${index + 1} uploaded successfully!`;
          } else {
            return `Failed to upload form ${index + 1}`;
          }
        })
      );

      setUploadStatus("All forms submitted successfully!");
    } catch (error) {
      console.error("Error uploading forms:", error);
      setUploadStatus("Error uploading forms.");
    }
  };

  const addForm = () => {
    setForms([...forms, { id: Date.now(), fields: {}, imageFile: null }]);
  };
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedForms = forms.map((form, i) =>
      i === index
        ? { ...form, fields: { ...form.fields, [name]: value } }
        : form
    );
    setForms(updatedForms);
  };

  const removeForm = (index) => {
    setForms(forms.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="container pt-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <form
              className="row g-3 border rounded px-3 py-3"
              onSubmit={handleSubmit}
            >
              {forms.map((form, index) => (
                <div key={form.id} className="border p-3 mb-3 row">
                  <div className="col-md-6">
                    <label className="form-label">Book Name</label>
                    <input
                      type="text"
                      name="bookName"
                      className="form-control"
                      placeholder="Enter Book Name"
                      value={form.fields.bookName || ""}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Category</label>
                    <input
                      type="text"
                      name="category"
                      className="form-control"
                      placeholder="Enter Category"
                      value={form.fields.category || ""}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Author Name</label>
                    <input
                      type="text"
                      name="authorName"
                      className="form-control"
                      placeholder="Author name"
                      value={form.fields.authorName || ""}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Book Size</label>
                    <input
                      type="text"
                      name="bookSize"
                      className="form-control"
                      placeholder="Book size"
                      value={form.fields.bookSize || ""}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Total Pages</label>
                    <input
                      type="number"
                      name="totalPages"
                      className="form-control"
                      value={form.fields.totalPages || ""}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State</label>
                    <select
                      name="state"
                      className="form-select"
                      value={form.fields.state || ""}
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value="">Choose...</option>
                      <option value="Available">Available</option>
                      <option value="Unavailable">Unavailable</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Upload File</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(event) => handleFileChange(index, event)}
                    />
                  </div>
                  {forms.length > 1 && (
                    <div className="col-12 mt-2">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => removeForm(index)}
                      >
                        Remove Form
                      </button>
                    </div>
                  )}
                </div>
              ))}

              <div className="col-12 mb-3">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={addForm}
                >
                  More
                </button>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>

              {/* Display Upload Status Message */}
              {uploadStatus && (
                <div className="alert alert-info mt-3">{uploadStatus}</div>
              )}

              {/* Display API response */}
              {apiResponse && (
                <pre className="alert alert-secondary mt-3">
                  {JSON.stringify(apiResponse, null, 2)}
                </pre>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
