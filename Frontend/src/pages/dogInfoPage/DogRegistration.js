import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDogData } from "../../context/DogDataContext";
import HeaderTwo from "../../components/navbar/HeaderTwo";

export const DogRegistration = () => {
  const { formData, setFormData } = useDogData();
  const [breeds, setBreeds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get(
          "https://dog.ceo/api/breeds/list/all"
        );
        const breedData = response.data.message;
        const allBreeds = Object.keys(breedData);
        setBreeds(allBreeds);
      } catch (error) {
        console.error("Error fetching dog breeds:", error);
      }
    };

    fetchBreeds();
  }, []);

  const handleNameChange = (event) => {
    setFormData({
      ...formData,
      pet: {
        ...formData.pet,
        name: event.target.value,
      },
    });
  };

  const handleBirthdayChange = (event) => {
    setFormData({
      ...formData,
      pet: {
        ...formData.pet,
        birthday: event.target.value,
      },
    });
  };

  const handleBreedChange = (event) => {
    setFormData({
      ...formData,
      pet: {
        ...formData.pet,
        breed: event.target.value,
      },
    });
  };

  const handleNext = async () => {
    navigate("/dog-info");
  };

  return (
    <div className="w-10/12">
      <HeaderTwo />
      
      <h2 className="form_header">
        Hello! First, let's get some basic info about your pet before we find
        the perfect dog sitter.
      </h2>

      <div className="input_field_div">
        <input
          type="text"
          value={formData.pet.name}
          onChange={handleNameChange}
          placeholder="Enter pet name"
          className="input_field"
        />

        <input
          type="date"
          value={formData.pet.birthday}
          onChange={handleBirthdayChange}
          placeholder="Select pet birthday"
          className="input_field"
        />
      
        <select
          value={formData.pet.breed}
          onChange={handleBreedChange}
          placeholder="Select a dog breed"
          className="input_field"
        >
          <option value="">Select a breed</option>
          {breeds.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>

        <button onClick={handleNext} className="next_button">Next</button>
      </div>
      
    </div>
  );
};


