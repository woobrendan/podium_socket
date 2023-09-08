import { assert } from "chai";
import {
    formatDate,
    formatHardCharger,
    getFastLap,
    getSeries,
} from "../functions/resultFunc.js";
import { gtwca } from "./testEntries.js";
import { cleanEntry } from "../Socket_Test/functions/entryFuncs.js";

describe("Format incoming socket messages ", () => {
    it('Should take in tz message and return date format of "08-30-2023"', () => {
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

    it("Should take in a command R message and return the GTWCA name stripped of extra characters", () => {
        const message = {
            command: "$R",
            type: "R",
            eventName: "SRO COTA",
            eventShortName: "",
            runName: "Fanatec GT World Challenge America Race 1",
            runType: "R",
            startTime: 1684613400,
            _key: "$R",
        };

        const series = getSeries(message);

        assert.equal(series, "GT World Challenge America");
    });

    it("Should take in a command R message and return the PGT4A name stripped of extra characters", () => {
        const message = {
            command: "$R",
            type: "R",
            eventName: "SRO COTA",
            eventShortName: "",
            runName: "Pirelli GT4 America Race 1",
            runType: "R",
            _key: "$R",
        };

        const series = getSeries(message);

        assert.equal(series, "Pirelli GT4 America");
    });

    it("Should take in a command R message and return the GTAM name stripped of extra characters", () => {
        const message = {
            command: "$R",
            type: "R",
            eventName: "SRO COTA",
            eventShortName: "",
            runName: "GT America Race 2",
            runType: "R",
            _key: "$R",
        };

        const series = getSeries(message);

        assert.equal(series, "GT America");
    });

    it("Should take in a command R message and return the TCAM name stripped of extra characters", () => {
        const message = {
            command: "$R",
            type: "R",
            eventName: "SRO COTA",
            eventShortName: "",
            runName: "TC America Race 2",
            runType: "R",
            _key: "$R",
        };

        const series = getSeries(message);

        assert.equal(series, "TC America");
    });
});

describe("Format Award entries, Fast Lap & Hard Charger", () => {
    const entry = cleanEntry(gtwca[0]);

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
