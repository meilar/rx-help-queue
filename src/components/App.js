import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<TicketControl />} />
      </Routes>
    </Router> 
  );
}

export default App; 