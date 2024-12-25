import React, { useState } from "react";

interface EventFormProps {
  onAddEvent: (title: string, date: string) => void;
}

export const EventForm: React.FC<EventFormProps> = ({ onAddEvent }) => {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title && date) {
      onAddEvent(title, date);
      setTitle("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-events">
        <input
          type="text"
          placeholder="Название мероприятия"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-event"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input-date"
        />
        <button type="submit" className="button-add">
          Добавить
        </button>
      </div>
    </form>
  );
};

