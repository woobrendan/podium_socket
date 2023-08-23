const fs = require("fs");

const messages = [];

const readWSFile = () => {
    fs.readFile("./output.ws", "utf-8", (err, data) => {
        if (err) {
            console.log("error reading ws file", err);
        }

        const messages = data.split("\n");

        messages.forEach((message) => {
            const dateArr = message.split("|");
            const dateRemoved = dateArr.slice(1).join("|").trim();
            console.log(dateRemoved);
            // const messageObj = JSON.parse(dateRemoved.split("|")[1]);
            // console.log(messageObj);
        });
    });
};

readWSFile();
