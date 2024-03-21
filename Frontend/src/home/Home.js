import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DogRegistration } from '../pages/dogInfoPage/DogRegistration';
import DogInfo from '../pages/dogInfoPage/DogInfo';
import { DogInfoScreen } from '../pages/dogInfoPage/DogInfoScreen';
import { DogAdditionalInfo } from '../pages/dogInfoPage/AdditionalInfo';

export const Home = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    pet: {
      name: '',
      birthday: '',
      breed: '',
      gender: '',
      spayedNeutered: '',
      weight: '',
    },
    services: {
      dogSitting: false,
      dogWalking: false,
      dogGrooming: false,
      overnightCare: false,
    },
    address: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, pet: { ...formData.pet, [name]: value } });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [name]: checked,
      },
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/profile', formData);
      navigate('/success');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleNext = () => {
    setStep(step + 1); 
  };

  let currentComponent;
  switch (step) {
    case 1:
      currentComponent = (
        <DogRegistration
          formData={formData}
          updateFormData={setFormData}
          handleNext={handleNext}
        />
      );
      break;
    case 2:
      currentComponent = (
        <DogInfo
          formData={formData}
          updateFormData={setFormData}
          handleNext={handleNext}
        />
      );
      break;
    case 3:
      currentComponent = (
        <DogInfoScreen
          formData={formData}
          updateFormData={setFormData}
          handleNext={handleNext}
        />
      );
      break;
    case 4:
      currentComponent = (
        <DogAdditionalInfo
          formData={formData}
          updateFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      );
      break;
    default:
      currentComponent = null;
  }

  return (
    <div>
      {currentComponent}
    </div>
  );
};
