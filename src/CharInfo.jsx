  import React from 'react';

  function CharInfo({ char, locations }) {
    const location = locations.find((loc) => loc.name === char.location_name);

    return (
      <div
        className={`border border-gray-800 p-5 w-2/4 text-slate-200 rounded-xl m-0.5 ${
          location ? 'bg-cover bg-center' : 'bg-slate-600'
        }`}
        style={{ backgroundImage: location ? `url(${location.image_url})` : 'none' }}
      >
        <div className='  text-center text-lg flex justify-between '>
          <div className='text-white'>
            <h1 className='text-3xl font-bold'>{char.name}</h1>
            <p className='italic'>{char.title}</p>
            <p className='italic'>"{char.quote}"</p>
            {char.keepsake && <p className=''>{char.keepsake}</p>}
            <p className=''>{char.location_name}</p>
          </div>
          <img src={char.codex_portrait} alt={`${char.name} portrait`} className='object-cover h-full rounded-lg' />
        </div>
      </div>
    );
  }

  export default CharInfo;
