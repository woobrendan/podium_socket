import { useState, useEffect } from "react";
import axios from "axios";
import { getToday } from "./dateFuncs";
import { compareByDate } from "./sortFuncs";

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [currentEventName, setCurrentEventName] = useState("");

  useEffect(() => {
    const getEventList = async () => {
      try {
        const year = Number(getToday().split("-")[2]);
        const eventList = await axios.get("http://localhost:2020/api/events");

        // return list of events for the current year
        const currentYearEvents = eventList.data.events.filter(
          (event) => event.year === year,
        );
        const sortedEvents = currentYearEvents.sort(compareByDate);
        setEvents(sortedEvents);
        eventByDate(sortedEvents);
      } catch (err) {
        console.log("Error:", err);
      }
    };
    getEventList();
  }, []);

  const eventByDate = (events) => {
    const month = Number(getToday().split("-")[0]);
    const day = Number(getToday().split("-")[1]);

    if (month <= 3 && day < 6) setCurrentEventName(events[0].name);
    else if (month <= 4 && day < 3) setCurrentEventName(events[1].name);
    else if (month === 4) setCurrentEventName(events[2].name);
    else if (month === 5) setCurrentEventName(events[3].name);
    else if (month === 6) setCurrentEventName(events[4].name);
    else if (month === 8 && day < 7) setCurrentEventName(events[5].name);
    else if (month === 8) setCurrentEventName(events[6].name);
    else if (month === 9) setCurrentEventName(events[7].name);
    else if (month === 10) setCurrentEventName(events[8].name);
  };

  return { events, currentEventName };
};

export default useEvents;
