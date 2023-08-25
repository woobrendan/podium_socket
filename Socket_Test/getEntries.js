import { readWSFile } from "./simulate_socket.js";
import { shortenName, cleanEntry } from "./entryFuncs.js";

const getEntries = async () => {
    try {
        const messages = await readWSFile();

        const seriesList = messages.filter(
            (message) => message.command === "$R",
        );

        // string runname is "Fanatec GT World Challenge Race 1", remove Race 1 from string
        const series = seriesList[0].runName.split(" R")[0];

        const seriesShortHand = shortenName(series);

        // get entries based on series
        const filtered = messages.filter(
            (message) =>
                message.command === "$USAC:ENTRY" &&
                message.series === seriesShortHand,
        );

        const entries = filtered.map((entry) => cleanEntry(entry));

        return entries;
    } catch (err) {
        console.log("Error getting entries", err);
    }
};

getEntries();
