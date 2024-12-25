import React from "react";

interface IEvent {
  id: string;
  title: string;
  date: string;
}

interface EventListProps {
  events: IEvent[];
  onDeleteEvent: (id: string) => void;
}

export const EventList: React.FC<EventListProps> = ({ events, onDeleteEvent }) => {
  return (
    <ul className="list-events">
      {events.map((event) => (
        <li key={event.id} className="li-item">
          <div className="ivent-item">
            <p className="item-text">{event.title}</p>
          </div>
          <div className="item-text">
            {new Date(event.date).toLocaleDateString("ru-RU")}
          </div>
          <button onClick={() => onDeleteEvent(event.id)} className="button-remove">
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};
