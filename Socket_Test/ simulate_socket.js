import fs from "fs";

const messages = [];

const readWSFile = () => {
    fs.readFile("./output.ws", "utf-8", (err, data) => {
        if (err) {
            console.log("error reading ws file", err);
        }

        const messages = data.split("\n");

        messages.forEach((message) => console.log(message));
    });
};

readWSFile();
