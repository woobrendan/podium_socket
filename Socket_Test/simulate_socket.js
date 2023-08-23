const fs = require("fs");

const readWSFile = () => {
    const messageList = [];

    fs.readFile("./output.ws", "utf-8", (err, data) => {
        if (err) {
            console.log("error reading ws file", err);
        }

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
    });

    return messageList;
};

readWSFile();
