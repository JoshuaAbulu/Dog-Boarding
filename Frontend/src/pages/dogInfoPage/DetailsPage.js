import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDogData } from "../../context/DogDataContext";
import Header from "../../components/navbar/Header";

export const DetailsPage = () => {
  const { formData, setFormData } = useDogData();
  const [rate, setRate] = useState(formData.details?.rate || 0);
  const navigate = useNavigate();

  const handleRateChange = (event) => {
    const newRate = event.target.value;
    setRate(newRate);
    setFormData((prevData) => ({
      ...prevData,
      details: {
        ...prevData.details,
        rate: newRate,
      },
    }));
  };

  const handleNext = async () => {
    try {
      navigate("/additional-details");
    } catch (error) {
      console.error("Error navigating:", error);
    }
  };

  return (
    <div className="w-10/12">
      <Header />

      <h2 className="form_header">We're almost there; just a few more additional details to go</h2>
      <div className="input_field_div">
        <p>What rate are you offering for this job</p>

          <label className="input_field">
            $ 
            <input
              type="number"
              value={rate}
              onChange={handleRateChange}
            />
            / day
          </label>
        
        <button onClick={handleNext} className="next_button">Next</button>
      </div>
    </div>
  );
};
