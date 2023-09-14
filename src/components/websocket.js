import { useEffect, useState } from "react";
import "../Styling/socket.scss";
import Schedule from "./Schedule/Schedule.js";
// import dotenv from "dotenv";

// dotenv.config();

const USACWebSocket = () => {
    const [isRacing, setIsRacing] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // const socket = new WebSocket(process.env.WEBSOCKET);
        const socket = new WebSocket("wss://timing.usacnation.com/ws/sro");

        socket.onopen = () => {
            console.log("Connecting to Live timing");
            setIsConnected(true);
        };

        socket.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                // console.log(("message", message));
                // Process message, check for final and entries
                if (message.command === "$USAC:SUBSCRIPTIONS") {
                    setIsRacing(false);
                }
            } catch (error) {
                console.log("Error parsing JSON", error);
            }
        };

        // once isComplete is true, pass results to the table

        socket.onclose = () => {
            console.log("Connection to USAC Websocket closed");
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <>
            <section id="socket_home">
                <Schedule />
                {isConnected &&
                    !isRacing &&
                    "Connection established, awaiting race data"}
            </section>
        </>
    );
};

export default USACWebSocket;
