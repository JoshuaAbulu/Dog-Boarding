import React from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDogData } from "../../context/DogDataContext";
import Header from "../../components/navbar/Header";

export const DogAdditionalInfo = () => {
  const { formData, setFormData } = useDogData();
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      services: {
        ...prevData.services,
        [name]: checked,
      },
    }));
  };

  const handleNext = async () => {
    try {
      // await axios.post("", formData);
      console.log(formData);
      navigate("/details-page");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-10/12">
      <Header />

      <h2 className="form_header">We are almost there; just a little more additional details</h2>

      <div className="input_field_div">
        <p>Choose all that's applicable</p>

        <div>
          <label>
            <input
              type="checkbox"
              name="dogSitting"
              checked={formData.services && formData.services.dogSitting}
              onChange={handleCheckboxChange}
            />
            Dog sitting
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="dogWalking"
              checked={formData.services && formData.services.dogWalking}
              onChange={handleCheckboxChange}
            />
            Dog walking
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="dogGrooming"
              checked={formData.services && formData.services.dogGrooming}
              onChange={handleCheckboxChange}
            />
            Dog grooming
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="overnightCare"
              checked={formData.services && formData.services.overnightCare}
              onChange={handleCheckboxChange}
            />
            Dog overnight care
          </label>
        </div>

        <button onClick={handleNext} className="next_button">Next</button>
      </div>
    </div>
  );
};
