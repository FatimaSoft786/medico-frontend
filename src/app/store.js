import { configureStore } from '@reduxjs/toolkit';
import registerReducer from "../pages/Signup/registerSlice";
import loginReducer from "../pages/Login/loginSlice";
import verifyReducer from "../pages/Verification/verificationSlice";
import serviceReducer from "../pages/PatientDashboard/serviceSlice";
import doctorReducer from "../pages/PatientDashboard/doctorSlice";
import favoriteReducer from "../pages/FavoriteDocs/favSlice"

export const store = configureStore({
    reducer: {
      signup: registerReducer,
      login: loginReducer,
      verify: verifyReducer,
      service: serviceReducer,
      doctor: doctorReducer,
      favorite: favoriteReducer
    },
  });