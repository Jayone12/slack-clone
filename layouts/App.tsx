import LogIn from '@pages/Login';
import SignUp from '@pages/SignUp';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      {/* react-router-dom v6 부터는 redirect가 없어지고 아래와 같이 사용한다. */}
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
