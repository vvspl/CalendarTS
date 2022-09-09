import React from 'react';
import { addEvent } from '../../gateway/eventsGateway';
import './modal.scss';
import { IModal } from './../../utils/Interface';

const Modal: React.FC<IModal> = props => {
  const createEvent: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement));

    const formDate = new Date(formData.date as string);

    addEvent({
      title: formData.title,
      description: formData.description,
      dateFrom: new Date(
        formDate.getFullYear(),
        formDate.getMonth(),
        formDate.getDate(),
        // @ts-ignore
        formData.startTime.substring(0, 2),
        // @ts-ignore
        formData.startTime.substring(3, 5),
      ),
      dateTo: new Date(
        formDate.getFullYear(),
        formDate.getMonth(),
        formDate.getDate(),
        // @ts-ignore
        formData.endTime.substring(0, 2),
        // @ts-ignore
        formData.endTime.substring(3, 5),
      ),
    }).then(() => props.showEvents());
    props.closeModal();
  };
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={() => props.closeModal()}>
            +
          </button>
          <form className="event-form" onSubmit={createEvent}>
            <input
              type="text"
              required
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <input type="date" required name="date" className="event-form__field" />
              <input type="time" required name="startTime" className="event-form__field" />
              <span>-</span>
              <input type="time" required name="endTime" className="event-form__field" />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              {'Create'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
