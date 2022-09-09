import React from 'react';
import { days } from '../../utils/dateUtils.js';
import { ICalendarProps } from './../../utils/Interface';

const Navigation: React.FC<ICalendarProps> = ({ weekDates }) => {
  let isCurrentDateOnPage = weekDates.some(
    // if is today's date on screen
    (
      dayDate: Date, // comparing dates on equal as date.month.year for chosing proper day(today)
    ) =>
      dayDate.getDate() === new Date().getDate() &&
      dayDate.getMonth() === new Date().getMonth() &&
      dayDate.getFullYear() === new Date().getFullYear(),
  );

  let isToday = false;
  const isTodayDate = (date: number) => {
    if (date === new Date().getDate() && isCurrentDateOnPage) return true;
    return false;
  };

  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => (
        <div className="calendar__day-label day-label" key={Math.random()}>
          {(isToday = isTodayDate(dayDate.getDate()))}
          <span className={isToday ? 'day-label__day-name-now' : 'day-label__day-name'}>
            {days[dayDate.getDay()]}
          </span>
          <span className={isToday ? 'day-label__day-number-now' : 'day-label__day-number'}>
            {dayDate.getDate()}
          </span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;
