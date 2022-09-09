import React, { useState } from 'react';
import { deleteEvent } from '../../gateway/eventsGateway';
import './event.scss';
import { IEvents } from './../../utils/Interface';

const Event: React.FC<IEvents> = ({ k, height, marginTop, title, time, showEvents }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  let [showDelBtn, setShowDelBtn] = useState(false);

  const showDeletePopup: React.MouseEventHandler<HTMLDivElement> = event => {
    if ((event.target as Element).className !== 'delete-event-btn') {
      setShowDelBtn((showDelBtn = !showDelBtn));
    }
  };

  const deleteEvents = () => {
    deleteEvent(+k).then(() => showEvents());
    setShowDelBtn((showDelBtn = false));
  };

  return (
    <div style={eventStyle} className="event" onClick={showDeletePopup}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {showDelBtn && (
        <button className="delete-event-btn" onClick={deleteEvents}>
          Delete
        </button>
      )}
    </div>
  );
};

export default Event;
