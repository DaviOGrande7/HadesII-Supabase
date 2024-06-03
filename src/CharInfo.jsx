import React from 'react';

function CharInfo({ char, location }) {
  return (
    <div className={`border border-gray-800 p-5 w-1/4 text-slate-200 rounded-xl m-0.5 ${char.location_name === location.name ? 'bg-cover bg-center' : 'bg-slate-600'}`} style={{ backgroundImage: `url(${location.image_url})` }}>
      <h1 className='lg'><strong>{char.name}</strong></h1>
      <p className='italic'>{char.title}</p>
      {char.keepsake && (
        <p>{char.keepsake}</p>
      )}
      <p>{char.location_name}</p>
    </div>
  );
}

export default CharInfo;
