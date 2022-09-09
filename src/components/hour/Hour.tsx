import React, { useState, useEffect } from 'react';
import Event from '../event/Event';
import { formatMins } from '../../utils/dateUtils.js';
import { IHour } from './../../utils/Interface';

const Hour: React.FC<IHour> = ({ dataHour, hourEvents, dataDay, showEvents }) => {
  let [margin, setMargin] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-sequences, react-hooks/exhaustive-deps
      setMargin((margin = new Date().getMinutes())), 60000;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {dataHour === new Date().getHours() && dataDay === new Date().getDate() ? (
        <div className="red-line" style={{ marginTop: margin }}></div>
      ) : (
        <></>
      )}

      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            key={id}
            k={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            showEvents={showEvents}
          />
        );
      })}
    </div>
  );
};

export default Hour;
