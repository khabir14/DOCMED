import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, LoginPage, SignupPage} from "./pages";

const App = ()=>(
  <div>
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route  path="/home" element={<Home />} />
        <Route  path="/login" element={<LoginPage />} />
        <Route  path="/signup" element={<SignupPage />} />

      </Routes>

    </Router>

  </div>
)

export default App;