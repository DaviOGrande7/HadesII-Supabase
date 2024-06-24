import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./HomePage";
import FormPage from "./FormPage";

const supabase = createClient(
  "https://gdehsouqjqdgjwlbxkbz.supabase.co", 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZWhzb3VxanFkZ2p3bGJ4a2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MzUzNjksImV4cCI6MjAzMzAxMTM2OX0.GA-DWbB-9MpWaHuFioblPRaxPeF4y8osngwOty6Dssw"
);

function App() {
  const [chars, setChars] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getChar();
    getLocation();
  }, []);

  async function getChar() {
    const { data } = await supabase.from("characters").select();
    setChars(data);
  }

  async function getLocation() {
    const { data } = await supabase.from("locations").select();
    setLocations(data);
  }

  return (
    <Router>
      <div>
        <div className='fixed top translate-y-1/2 left-0'>
          <Link to="/">Home</Link>
          <br />
          <Link to="/form">Form</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage chars={chars} locations={locations} />} />
          <Route path="/form" element={<FormPage locations={locations}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
