import { createContext, useContext, useState } from "react";

const PetsitterDataContext = createContext();

export const usePetSitterData = () => useContext(PetsitterDataContext);

export const PetsitterDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    services: {
      dogSitting: false,
      dogWalking: false,
      dogGrooming: false,
      overnightCare: false,
    },
    address: {
      country: "",
      town: "",
      zipcode: "",
    },
    details: {
      rate: 0,
      photo: "",
      identification: "",
      Description: "",
      availability: "",
      certificate: "",
      jobDescription: "",
    },
  });

  return (
    <PetsitterDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </PetsitterDataContext.Provider>
  );
};
