import { readWSFile } from "./simulate_socket";

const getEntries = () => {
    const messages = readWSFile();

    const filtered = messages.filtered(
        (message) => message.command === "$USAC:ENTRY",
    );
    console.log(filtered);
};

getEntries();
