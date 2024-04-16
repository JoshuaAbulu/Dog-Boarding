import React from "react";
import { useNavigate } from "react-router-dom";
import { usePetSitterData } from "../../context/PetsitterDataContext";
import Header from "../../components/navbar/Header";

export const PetSitterInfo3 = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = usePetSitterData();
  const { details } = formData;

  const handleAvailabilityChange = (event) => {
    const availabilityValue = event.target.value;
    setFormData({ 
      ...formData, 
      details: {
        ...formData.details,
        availability: availabilityValue 
      } 
    });
  };
  

  const handleCountryChange = (event) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        country: event.target.value,
      },
    });
  };
  
  const handleTownChange = (event) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        town: event.target.value,
      },
    });
  };
  
  const handleZipChange = (event) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        zipcode: event.target.value,
      },
    });
  };
  
  const handleNext = async () => {
    navigate("/petsitter-pricing");
  };
  return (
    <div className="w-10/12">
      <Header />

      <h2 className="form_header">
        Unleash your inner dog lover and become a top-notch dog sitter!
      </h2>

      <div className="input_field_div">
        <div className="flex flex-col gap-4">
          <h2>Availability:</h2>
          <p>Indicate when you are available to work</p>

          <div className="grid grid-cols-4 gap-2">
            <div className="input_field">
              <input
                type="radio"
                value="weekdays"
                checked={details.availability === "weekdays"}
                onChange={handleAvailabilityChange}
              />
              <label>Weekdays</label>
            </div>

            <div className="input_field">
              <input
                type="radio"
                value="weekends"
                checked={details.availability === "weekends"}
                onChange={handleAvailabilityChange}
              />
              <label>Weekends</label>
            </div>

            <div className="input_field">
              <input
                type="radio"
                value="specific_hours"
                checked={details.availability === "specific_hours"}
                onChange={handleAvailabilityChange}
              />
              <label>Specific Hours</label>
            </div>

            <div className="input_field">
              <input
                type="radio"
                value="overnight"
                checked={details.availability === "overnight"}
                onChange={handleAvailabilityChange}
              />
              <label>Overnight Stay</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2>Location:</h2>

          <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                name="country"
                value={formData.address.country}
                onChange={handleCountryChange}
                placeholder="Enter Country"
                className="input_field"
              />

            
              <input
                type="text"
                name="town"
                value={formData.address.town}
                onChange={handleTownChange}
                placeholder="Enter Town Name"
                className="input_field"
              />

              <input
                type="number"
                name="zipcode"
                value={formData.address.zipcode}
                onChange={handleZipChange}
                placeholder="Enter Zip Code"
                className="input_field"
              />
          </div>
        </div>

        <button onClick={handleNext} className="next_button">
          Next
        </button>
      </div>
    </div>
  );
};
