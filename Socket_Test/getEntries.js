import { readWSFile } from "./simulate_socket.js";

const getEntries = async () => {
    const messages = await readWSFile();

    const filtered = messages.filter(
        (message) => message.command === "$USAC:ENTRY",
    );
    console.log(filtered);
};

getEntries();
