import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DogDataProvider } from "./context/DogDataContext";
import {DogRegistration} from "./pages/dogInfoPage/DogRegistration";
import DogInfo from "./pages/dogInfoPage/DogInfo";
import {DogInfoScreen} from "./pages/dogInfoPage/DogInfoScreen";
import {DogAdditionalInfo} from "./pages/dogInfoPage/AdditionalInfo";
import SignUpForm from "./auth/signUp/SignUpForm";
import LoginPage from "./auth/Login/Login";

const App = () => {
  return (
    <Router>
      <DogDataProvider>
        <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<DogRegistration />} />
          <Route path="/dog-info" element={<DogInfo />} />
          <Route path="/dog-info-screen" element={<DogInfoScreen />} />
          <Route path="/additional-info" element={<DogAdditionalInfo />} />
        </Routes>
      </DogDataProvider>
    </Router>
  );
};

export default App;
