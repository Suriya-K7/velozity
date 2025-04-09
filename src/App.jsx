import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage, ForgotPasswordPage, NewPasswordPage, PasswordSuccess, ResetPasswordPage, SignInPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-link" element={<ResetPasswordPage />} />
        <Route path="/new-password" element={<NewPasswordPage />} />
        <Route path="/password-success" element={<PasswordSuccess />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;