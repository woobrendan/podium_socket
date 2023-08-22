import { useEffect } from "react";
import dotenv from "dotenv";

dotenv.config();

const USACWebSocket = () => {
    const []
    useEffect(() => {
        const socket = new WebSocket(process.env.WEBSOCKET);

        socket.onopen = () => {
            console.log("Connected to Live timing");
        };

        socket.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                // Process message, check for final and entries
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

    return (
        <div>

        </div>
    )
};

export default USACWebSocket;
