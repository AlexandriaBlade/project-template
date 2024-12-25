import React, { useState, useEffect } from "react";
import { EventForm } from "./components/EventForm";
import { EventList } from "./components/EventList";
import { v4 as uuidv4 } from "uuid";
import { createSnowflakes } from "./utils/snowflakes";
import "./styles.css";

const initialEvents = [
    {
        id: uuidv4(),
        title: "Порадоваться первому дню зимы :)",
        date: "2024-12-01",
    },
    {
        id: uuidv4(),
        title: "Спасибо команде Яндекс Практикум!",
        date: "2024-12-02",
    },
    {
      id: uuidv4(),
      title: "С наступающим новым годом!:)",
      date: "2024-12-25",
  },
];

export const App = () => {
    const [events, setEvents] = useState(initialEvents);

    const handleAddEvent = (title: string, date: string) => {
        const newEvent = { id: uuidv4(), title, date };
        setEvents((prevEvents) => [...prevEvents, newEvent]);
    };

    const handleDeleteEvent = (id: string) => {
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    };

    useEffect(() => {
        createSnowflakes(); // Генерируем снежинки при загрузке компонента
    }, []);

    return (
        <div className="main">
            <h1 className="header">Запланированные мероприятия</h1>
            <EventForm onAddEvent={handleAddEvent} />
            <h2 className="event-header">Список мероприятий</h2>
            <EventList events={events} onDeleteEvent={handleDeleteEvent} />
        </div>
    );
};
