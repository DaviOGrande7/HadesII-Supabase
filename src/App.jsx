import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import CharInfo from "./CharInfo";

const supabase = createClient("https://gdehsouqjqdgjwlbxkbz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZWhzb3VxanFkZ2p3bGJ4a2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MzUzNjksImV4cCI6MjAzMzAxMTM2OX0.GA-DWbB-9MpWaHuFioblPRaxPeF4y8osngwOty6Dssw");

function App() {
  const [chars, setChars] = useState([]);
  const [locations, setLocation] = useState([])

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
    setLocation(data);
  }

  console.log(chars);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {chars.map((char) => (
          <CharInfo key={char.name} char={char} location={locations} />
        ))}
      </div>
      {locations.map((location) => (
        <img src={location.image_url}/>
      ))}
    </>
  );
}

export default App;
