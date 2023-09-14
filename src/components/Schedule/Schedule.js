import schedule from "./schedule_info.js";

const Schedule = () => {
    const scheduleList = schedule.map((race, index) => (
        <li key={index} className="event">
            <img alt={race.event} src={race.img} />
            <div className="event_info">
                <h3>{race.event}</h3>
                <p>{race.date}</p>
            </div>
        </li>
    ));
    return <ul>{scheduleList} </ul>;
};

export default Schedule;
