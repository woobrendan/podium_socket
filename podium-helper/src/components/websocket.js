import { useEffect, useState } from "react";
import dotenv from "dotenv";

dotenv.config();

const USACWebSocket = () => {
    const [isRacing, setIsRacing] = useState(false);

    useEffect(() => {
        const socket = new WebSocket(process.env.WEBSOCKET);

        socket.onopen = () => {
            console.log("Connected to Live timing");
        };

        socket.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                // Process message, check for final and entries
                if (message.command === "$USAC:SUBSCRIPTIONS") {
                }
            } catch (error) {
                console.log("Error parsing JSON", error);
            }
        };

        socket.onclose = () => {
            console.log("Connection to USAC Websocket closed");
        };

        return () => {
            socket.close();
        };
    }, []);

    return <div>Hello</div>;
};

export default USACWebSocket;
