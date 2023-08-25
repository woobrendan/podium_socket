import { readWSFile } from "./simulate_socket.js";

const getEntries = async () => {
    try {
        const messages = await readWSFile();

        const seriesList = messages.filter(
            (message) => message.command === "$R",
        );

        const series = seriesList[0].runName.split(" R")[0];

        const seriesShortHand = shortenName(series);

        const filtered = messages.filter(
            (message) =>
                message.command === "$USAC:ENTRY" &&
                message.series === seriesShortHand,
        );
        console.log(filtered);
    } catch (err) {
        console.log("Error getting entries", error);
    }
};

getEntries();

const shortenName = (seriesName) => {
    const obj = {
        "Fanatec GT World Challenge America": "FGTWCA",
        "GT America": "GTA",
        "TC America": "TCAM",
        "Pirelli GT4 America": "GT4 America",
        "Toyota GR Cup": "GR Cup",
        "Intercontinental GT Challenge": "IGTC",
    };
    return obj[seriesName];
};
