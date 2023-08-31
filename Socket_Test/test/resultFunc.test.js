import { assert } from "chai";
import {
    formatDate,
    formatHardCharger,
    getFastLap,
} from "../functions/resultFunc.js";
import entries from "./testEntries.js";
import { cleanEntry } from "../functions/entryFuncs.js";

describe("Format incoming TZ message to get date", () => {
    it('Should return in format of "08-30-2023"', () => {
        const socketMsg = {
            _level: 0,
            _key: "$USAC:TZ",
            command: "$USAC:TZ",
            tz: "America/Chicago",
            offset: "-05:00",
            timestamp: 1684619282564000,
        };

        const date = formatDate(socketMsg);

        assert.equal(date, "5-20-2023");
    });
});

describe("Format Award entries, Fast Lap & Hard Charger", () => {
    const entry = cleanEntry(entries[0]);

    it("Should format the hard charger from incoming message", () => {
        const expected = {
            entryNum: "28",
            startPos: 9,
            gain: 7,
            entry: {
                series: "FGTWCA",
                number: "28",
                vehicle: "Porsche GT3 R 992",
                team: "RS1",
                driver1: "Eric Filgueiras",
                driver2: "Stevan McAleer",
            },
        };

        // refactor later to gather startPos and gain from messages
        const hardCharger = formatHardCharger(entry, 9, 7);

        assert.deepEqual(hardCharger, expected);
    });

    it("Should format fast lap from incoming message", () => {
        const lapTime = "2:06.431";
        const fastLap = getFastLap(entry, lapTime);

        const expected = {
            driver: "Eric Filgueiras",
            laptime: "2:06.431",
        };

        assert.deepEqual(fastLap, expected);
    });
});
