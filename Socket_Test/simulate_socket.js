import fs from "fs";

const readWSFile = async () => {
    const messageList = [];

    try {
        const data = await fs.promises.readFile("./output.ws", "utf-8");

        const messages = data.split("\n");

        const filtered = messages.filter((message) => !message.includes("gps"));

        filtered.forEach((message) => {
            // get index of first curly brace, i.e. after date
            const startIndex = message.indexOf("{");

            if (startIndex !== -1) {
                // get JSON portion of data
                const jsonData = message.slice(startIndex);

                try {
                    const messageObj = JSON.parse(jsonData);
                    messageList.push(messageObj);
                } catch (error) {
                    console.error("Error parsing JSON", error);
                }
            }
        });
    } catch (err) {
        console.error("Error reading ws file", err);
        return [];
    }

    return messageList;
};

export { readWSFile };

readWSFile();
