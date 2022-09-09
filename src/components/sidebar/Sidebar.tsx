import React from 'react';
import './sidebar.scss';

const Sidebar = () => {
  const hours: number[] = Array(24)
    .fill(24)
    .map((val, index) => index);

  return (
    <div className="calendar__time-scale">
      {hours.map(hour => (
        <div key={Math.random()} className="time-slot">
          <span className="time-slot__time">{`${hour}:00`}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
