import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDogData } from "../../context/DogDataContext";
import Header from "../../components/navbar/Header";

export const DogInfoScreen = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useDogData();
  const [addressOption, setAddressOption] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "addressOption") {
      setAddressOption(value);
      if (value === "new_address") {
        setFormData({ ...formData, address: "" });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="w-10/12">
      <Header />

      <h2 className="form_header">Where does {formData.pet.name} need a sitter?</h2>
      <div className="input_field_div">
        <label className="input_field">
          <input
            type="radio"
            name="addressOption"
            value="same_as_previous"
            checked={addressOption === "same_as_previous"}
            onChange={handleInputChange}
          />
          Same as previous address
        </label>
      
        <label className="input_field">
          <input
            type="radio"
            name="addressOption"
            value="new_address"
            checked={addressOption === "new_address"}
            onChange={handleInputChange}
          />
          New address? Type here:
        </label>
        {addressOption === "new_address" && (
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="input_field"
          />
        )}

        <button onClick={() => navigate("/additional-info")} className="next_button">Next</button>
      </div>
  
    </div>
  );
};
