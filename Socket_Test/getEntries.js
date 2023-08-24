import { readWSFile } from "./simulate_socket.js";

const getEntries = async () => {
    const messages = await readWSFile();

    const seriesList = messages.filter((message) => message.command === "$R");

    const series = seriesList[0].runName.split(" R")[0];

    const seriesShortHand = shortenName(series);

    const filtered = messages.filter(
        (message) =>
            message.command === "$USAC:ENTRY" &&
            message.series === seriesShortHand,
    );
    console.log(filtered);
};

getEntries();

const shortenName = (seriesName) => {
    const obj = {
        "Fanatec GT World Challenge America": "GTWCA",
        "GT America": "GTA",
        "TC America": "TCAM",
        "Pirelli GT4 America": "GT4 America",
        "Toyota GR Cup": "GR Cup",
        "Intercontinental GT Challenge": "IGTC",
    };
    return obj[seriesName];
};
