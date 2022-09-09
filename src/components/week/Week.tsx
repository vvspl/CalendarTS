import React from 'react';
import Day from '../day/Day';
import PropTypes from 'prop-types';
import { IWeek } from './../../utils/Interface';

import './week.scss';

const Week: React.FC<IWeek> = ({ weekDates, events, showEvents }) => {
  return (
    <div className="calendar__week">
      {weekDates!.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

        //getting all events from the day we will render
        const dayEvents = events!.filter(
          event => event.dateFrom > dayStart && +event.dateTo < dayEnd,
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            showEvents={showEvents}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  showEvents: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
};

export default Week;
