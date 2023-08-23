import { useEffect } from "react";
import dotenv from "dotenv";

dotenv.config();

const USACWebSocket = () => {
    useEffect(() => {
        const socket = new WebSocket(process.env.WEBSOCKET);

        socket.onopen = () => {
            console.log("Connected to Live timing");
        };

        socket.onmessage = (event) => {
            const message = event.data;
            //json parse

            // Process message, check for final and entries
        };

        socket.onclose = () => {
            console.log("Connection to USAC Websocket closed");
        };

        return () => {
            socket.close();
        };
    }, []);
};

export default USACWebSocket;
