import React from 'react'
import CharInfo from "./CharInfo";

function HomePage({ chars, locations }) {
    return (
      <div className="flex flex-wrap justify-center">
        {chars.map((char) => (
          <CharInfo key={char.name} char={char} locations={locations} />
        ))}
      </div>
    );
  }

export default HomePage