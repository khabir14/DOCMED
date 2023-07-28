import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, LoginPage, SignupPage, ContactPage} from "./pages";

const App = ()=>(
  <div>
    <Router>
      <Routes>
        <Route index path="/DOCMED" element={<Home />} />
        
        <Route  path="/DOCMED/login" element={<LoginPage />} />
        <Route  path="/DOCMED/signup" element={<SignupPage />} />
        <Route  path="/DOCMED/contact" element={<ContactPage />} />


      </Routes>

    </Router>

  </div>
)

export default App;