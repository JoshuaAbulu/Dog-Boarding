import React from "react";
import { useNavigate } from "react-router-dom";
import { useDogData } from "../../context/DogDataContext";
import Header from "../../components/navbar/Header";

const DogInfo = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useDogData();
  const { pet } = formData;

  const handleGenderChange = (event) => {
    const genderValue = event.target.value;
    setFormData({ pet: { ...pet, gender: genderValue } });
  };

  const handleSpayedNeuteredChange = (event) => {
    const spayedNeuteredValue = event.target.value;
    setFormData({ pet: { ...pet, spayedNeutered: spayedNeuteredValue } });
  };

  const handleWeightChange = (event) => {
    const weightValue = event.target.checked ? event.target.value : ''; 
    setFormData({ pet: { ...pet, weight: weightValue } });
  };

  const handleNext = async () => {
    navigate("/dog-info-screen");
  };

  return (
    <div className="w-10/12">
      <Header />
      
      <h2 className="form_header">How would you describe your pet?</h2>

      <div className="input_field_div">
        
        <div className="flex flex-col gap-4">
          <h2>Gender:</h2>

          <div className="input_field">
            <input
              type="radio"
              value="male"
              checked={pet.gender === "male"}
              onChange={handleGenderChange}
            />
            <label>Male</label>
          </div>

          <div className="input_field">
            <input
              type="radio"
              value="female"
              checked={pet.gender === "female"}
              onChange={handleGenderChange}
            />
            <label>Female</label>
          </div>
        </div>
      
        <div className="flex flex-col gap-4">
          <h2>Spayed/Neutered:</h2>

          <div className="grid grid-cols-3 gap-2">
            <div className="input_field">
              <input
                type="radio"
                value="yes"
                checked={pet.spayedNeutered === "yes"}
                onChange={handleSpayedNeuteredChange}
              />
              <label>Yes</label>
            </div>

            <div className="input_field">
              <input
                type="radio"
                value="not_sure"
                checked={pet.spayedNeutered === "not_sure"}
                onChange={handleSpayedNeuteredChange}
              />
              <label>Not sure</label>
            </div>

            <div className="input_field">
              <input
                type="radio"
                value="no"
                checked={pet.spayedNeutered === "no"}
                onChange={handleSpayedNeuteredChange}
              />
              <label>No</label>
            </div>
          </div>
        </div>
      
        <div className="flex flex-col gap-4">
          <h2>Weight:</h2>

          <div className="grid grid-cols-2 gap-2">

            <div className="input_field">
              <input
                type="checkbox"
                value="5-20"
                checked={pet.weight === "5-20"}
                onChange={handleWeightChange}
              />
              <label>5 - 20 lb small</label>
            </div>
            
            <div className="input_field">
              <input
                type="checkbox"
                value="21-50"
                checked={pet.weight === "21-50"}
                onChange={handleWeightChange}
              />
              <label>21 - 50 lb medium</label>
            </div>
            
            <div className="input_field">
              <input
                type="checkbox"
                value="51-99"
                checked={pet.weight === "51-99"}
                onChange={handleWeightChange}
              />
              <label>51 - 99 lb large</label>
            </div>
            
            <div className="input_field">
              <input
                type="checkbox"
                value="100+"
                checked={pet.weight === "100+"}
                onChange={handleWeightChange}
              />
              <label>100+ lb extra large</label>
            </div>
          </div>
        </div>
        
          <button onClick={handleNext} className="next_button">Next</button>
      </div>
      
    </div>
  );
};

export default DogInfo;
