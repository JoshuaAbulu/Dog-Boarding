import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { usePetSitterData } from "../../context/PetsitterDataContext";
import Header from "../../components/navbar/Header";

export const PetSitterPricing = () => {
    const { formData, setFormData } = usePetSitterData();
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
        navigate("/petsitter-details");
      } catch (error) {
        console.error("Error navigating:", error);
      }
    };
  return (
    <div className="w-10/12">
    <Header />

    <h2 className="form_header">We're almost there; just a few more additional details to go</h2>
    <div className="input_field_div">
      <p>What are your pricing for services offerred</p>

        <label className="input_field">
          $ 
          <input
            type="number"
            value={rate}
            onChange={handleRateChange}
          />
          / hours
        </label>
      
      <button onClick={handleNext} className="next_button">Next</button>
    </div>
  </div>
  )
}
