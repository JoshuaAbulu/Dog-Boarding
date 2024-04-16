import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { usePetSitterData } from "../../context/PetsitterDataContext";
import Header from "../../components/navbar/Header";

export const PetSitterDetails = () => {
  const { formData, setFormData } = usePetSitterData();
  const { details } = formData;
  const [certificate, setCertificate] = useState(details.headline);
  const [jobDescription, setJobDescription] = useState(details.jobDescription);
//   const navigate = useNavigate();

  const handleHeadlineChange = (event) => {
    const newCertificate = event.target.value;
    setCertificate(newCertificate);
    setFormData((prevData) => ({
      ...prevData,
      details: {
        ...prevData.details,
        certificate: newCertificate,
      },
    }));
  };

  const handleJobDescriptionChange = (event) => {
    const newJobDescription = event.target.value;
    setJobDescription(newJobDescription);
    setFormData((prevData) => ({
      ...prevData,
      details: {
        ...prevData.details,
        jobDescription: newJobDescription,
      },
    }));
  };

  const handleNext = async () => {
    try {
      //   await axios.post("", formData);
      console.log(formData);
    //   navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-10/12">
      <Header />

      <h2 className="form_header">
        We're almost there; just a few more additional details to go
      </h2>

      <div className="input_field_div">
        <div>
          <h3>We're almost there; just a few more additional details to go</h3>
          <p>
            Share any additional information or skills you have that set you
            apart from other dog sitters.
          </p>
        </div>

        <textarea
          value={jobDescription}
          onChange={handleJobDescriptionChange}
          className="input_field"
        />


        <input
          type="file"
          value={certificate}
          onChange={handleHeadlineChange}
          placeholder="Upload relevant Certifications/Qualification"
          className="input_field"
        />

        <button onClick={handleNext} className="next_button">
          Next
        </button>
      </div>
    </div>
  );
};
