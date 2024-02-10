import React, { useState } from 'react';

interface LevelSelectorProps {
    levels: string[]; 
    onSelect: (level: string) => void;
  }

const Levels = ({ levels, onSelect }:LevelSelectorProps) => {
  const [selectedLevel, setSelectedLevel] = useState(levels[0]);

  const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div className='flex flex-row justify-center items-center font-bold gap-5 my-5'>
      <label htmlFor="level" className='text-white '>Select A Level:</label>
      <select id="level" value={selectedLevel} onChange={handleLevelChange} className='rounded px-5 py-2 outline-none focus-within:none'>
        {levels.map((level, index) => (
          <option key={index} value={level}>{level}</option>
        ))}
      </select>
    </div>
  );
};

export default Levels;
