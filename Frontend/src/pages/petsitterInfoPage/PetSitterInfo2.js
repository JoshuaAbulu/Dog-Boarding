import React from 'react'
import Header from '../../components/navbar/Header'
import { usePetSitterData } from "../../context/PetsitterDataContext";
import { useNavigate } from "react-router-dom";

export const PetSitterInfo2 = () => {

    const { formData, setFormData } = usePetSitterData();
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
      navigate("/petsitter3");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="w-10/12">
    <Header />

    <h2 className="form_header">Unleash your inner dog lover and become a  top-notch dog sitter! Set up your profile now!</h2>

    <div className="input_field_div">
      <p>What services do you offer as a dog sitter Choose all that’s applicable</p>

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
  )
}
