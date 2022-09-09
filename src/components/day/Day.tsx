import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';
import { IDay } from './../../utils/Interface';

const Day: React.FC<IDay> = ({ dataDay, dayEvents, showEvents }) => {
  const hours: number[] = Array(24)
    .fill(24)
    .map((val, index: number) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents!.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            dataDay={dataDay}
            showEvents={showEvents}
          />
        );
      })}
    </div>
  );
};

export default Day;
