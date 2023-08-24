import { readWSFile } from "./simulate_socket.js";
import { shortenName } from "../podium-helper/src/functions/helperFunc.js";

const getEntries = async () => {
    const messages = await readWSFile();

    const seriesList = messages.filter((message) => message.command === "$R");

    const series = seriesList[0].runName.split(" R")[0];

    const seriesShortHand = shortenName(series);
    console.log("series", seriesShortHand);

    const filtered = messages.filter(
        (message) => message.command === "$USAC:ENTRY",
    );
    // console.log(filtered);
};

getEntries();
