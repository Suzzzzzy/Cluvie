/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "@/pages/Main";
import { SignIn, SignUp, SignUpForm } from "@/pages/User";
import ClubDetail from "@/pages/ClubDetail/ClubDetail";
import ClubList from "@/pages/ClubList";
import ClubCreate from "@/pages/ClubCreate/ClubCreate";
import ClubUpdate from "@/pages/ClubUpdate/ClubUpdate";
import ClubCreateTest from "@/pages/ClubCreateTest";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='signIn' element={<SignIn />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='signUpByEmail' element={<SignUpForm />} />
          <Route path='clubDetail' element={<ClubDetail />} />
          <Route path='clubList' element={<ClubList />} />
          <Route path='clubCreate' element={<ClubCreate />} />
          <Route path='clubUpdate' element={<ClubUpdate />} />
          <Route path='clubCreateTest' element={<ClubCreateTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
