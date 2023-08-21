import { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";
import useEvents from "../functions/useEvents";
import axios from "axios";

const EventSearch = ({ component, getValue }) => {
  let { events, currentEventName } = useEvents();
  const [eventName, setEventName] = useState("");
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    component === "podium" ? setEventName(currentEventName) : setEventName("");
  }, [currentEventName]);

  useEffect(() => {
    if (component !== "podium") {
      getEvents();
    }
  }, []);

  const getEvents = async () => {
    try {
      const data = await axios.get("http://localhost:2020/api/events");
      const eventArr = data.data.events;

      const uniqueObjects = [];
      const tempObject = {};

      eventArr.forEach((event) => {
        const name = event.name;
        if (!tempObject[name]) {
          tempObject[name] = true;
          uniqueObjects.push(event);
        }
      });

      setEventList(uniqueObjects);
    } catch (err) {
      console.log("Error fetching events: ", err);
    }
  };

  const handleChange = (event) => {
    setEventName(event.target.value);
    getValue(event);
  };

  return (
    <Box data-testid="event_dropdown">
      <FormControl className="event_dropdown">
        <InputLabel>Events</InputLabel>
        <Select
          name="event"
          label="Events"
          value={eventName}
          onChange={(e) => handleChange(e)}
        >
          {(component === "podium" ? events : eventList).map((event, index) => (
            <MenuItem key={index} value={event.name} data-testid={event.name}>
              {event.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default EventSearch;
