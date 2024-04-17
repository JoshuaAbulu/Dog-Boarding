import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DogDataProvider } from "./context/DogDataContext";
import {RegistrationProvider} from './context/RegistrationContext'
import {PetsitterDataProvider} from './context/PetsitterDataContext'
import { DogRegistration } from "./pages/dogInfoPage/DogRegistration";
import DogInfo from "./pages/dogInfoPage/DogInfo";
import { DogInfoScreen } from "./pages/dogInfoPage/DogInfoScreen";
import { DogAdditionalInfo } from "./pages/dogInfoPage/AdditionalInfo";
import SignUpForm from "./auth/signUp/SignUpForm";
import Login from "./auth/Login/Login";
import { DetailsPage } from "./pages/dogInfoPage/DetailsPage";
import { AdditionalDetails } from "./pages/dogInfoPage/AdditionalDetails";
import { Home } from "./home/Home";
import { PetSitterInfo3 } from "./pages/petsitterInfoPage/PetSitterInfo3";
import { PetSitterPricing } from "./pages/petsitterInfoPage/PetSitterPricing";
import { PetSitterDetails } from "./pages/petsitterInfoPage/PetSitterDetails";
import { PetSitterInfo1 } from "./pages/petsitterInfoPage/PetSitterInfo1";
import { PetSitterInfo2 } from "./pages/petsitterInfoPage/PetSitterInfo2";




const App = () => {
  return (
    <Router>
      <RegistrationProvider>
        <DogDataProvider>
        <PetsitterDataProvider>
          <div className="flex justify-center">
            <Routes>
              <Route path="/" element={<SignUpForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dog-registration" element={<DogRegistration />} />
              <Route path="/dog-info" element={<DogInfo />} />
              <Route path="/dog-info-screen" element={<DogInfoScreen />} />
              <Route path="/additional-info" element={<DogAdditionalInfo />} />
              <Route path="/details-page" element={<DetailsPage />} />
              <Route path="/additional-details" element={<AdditionalDetails />} />
              <Route path="/home" element={<Home />} />
              <Route path="/petsitter1" element={<PetSitterInfo1 />} />
              <Route path="/petsitter2" element={<PetSitterInfo2 />} />
              <Route path="/petsitter3" element={<PetSitterInfo3 />} />
              <Route path="/petsitter-pricing" element={<PetSitterPricing />} />
              <Route path="/petsitter-details" element={<PetSitterDetails />} />
            </Routes>
          </div>
          </PetsitterDataProvider>
        </DogDataProvider>
      </RegistrationProvider>
    </Router>
  );
};

export default App;
