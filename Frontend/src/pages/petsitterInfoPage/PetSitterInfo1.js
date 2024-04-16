import React from 'react'
import Header from '../../components/navbar/Header'
import { useNavigate } from "react-router-dom";
import { usePetSitterData } from "../../context/PetsitterDataContext";

export const PetSitterInfo1 = () => {
  const { formData, setFormData } = usePetSitterData();
  const navigate = useNavigate();


  const handleDescriptionChange = (event) => {
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        name: event.target.value,
      },
    });
  };

  const handlePhotoChange = (event) => {
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        photo: event.target.value,
      },
    });
  };

  const handleIdentificationChange = (event) => {
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        identification: event.target.value,
      },
    });
  };

  const handleNext = async () => {
    navigate("/petsitter2");
  };
  return (
    <div className="w-10/12">
      <Header />
      
      <h2 className="form_header">
      Unleash your inner dog lover and become a  top-notch dog sitter! 
       Set up your profile now!
      </h2>

      <div className="input_field_div">
        <input
          type="text"
          name="description"
          value={formData.details.description}
          onChange={handleDescriptionChange}
          placeholder="Short description about youself"
          className="input_field"
        />

        <input
          type="file"
          name="photo"
          value={formData.details.photo}
          onChange={handlePhotoChange}
          placeholder="Add photo"
          className="input_field"
        />

        <input
          type="file"
          name="identification"
          value={formData.details.identification}
          onChange={handleIdentificationChange}
          placeholder="Upload a valid means of identification"
          className="input_field"
        />
       

        <button onClick={handleNext} className="next_button">Next</button>
      </div>
      
    </div>
  )
}
