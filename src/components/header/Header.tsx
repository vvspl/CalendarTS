import React from 'react';
import './header.scss';
import { IHeader } from './../../utils/Interface';

const Header: React.FC<IHeader> = props => {
  return (
    <header className="header">
      <button className="button create-event-btn" onClick={() => props.onCreate()}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={() => props.backToCurrentDate()}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={() => props.prevWeek()}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={() => props.nextWeek()}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{props.currentMonth}</span>
      </div>
    </header>
  );
};

export default Header;
