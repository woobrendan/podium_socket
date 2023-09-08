import { assert } from "chai";
import {
    handleClassPodium,
    placementBuilder,
} from "../functions/resultFunc.js";
import { gtwca, gtam, igtc } from "./testEntries.js";
import { cleanEntry } from "../Socket_test/functions/entryFuncs.js";

describe("Creating podiums for dual drivers", () => {
    it("PlacementBuild Func Should take a single entry and return formatted for placement finish", () => {
        const entry = cleanEntry(gtwca[0]);

        const expected = {
            number: "28",
            vehicle: "Porsche GT3 R 992",
            team: "RS1",
            driver1: "Eric Filgueiras",
            driver2: "Stevan McAleer",
        };

        const formatted = placementBuilder(entry);

        assert.deepEqual(formatted, expected);
    });

    it("Should take array of results and return 3 placement finishers", () => {
        const cleanEntries = gtwca.map((entry) => cleanEntry(entry));

        const podium = handleClassPodium(cleanEntries);

        const expected = {
            class: "Pro",
            firstPlace: {
                driver1: "Eric Filgueiras",
                driver2: "Stevan McAleer",
                vehicle: "Porsche GT3 R 992",
                team: "RS1",
                number: "28",
            },
            secondPlace: {
                driver1: "Manny Franco",
                driver2: "Alessandro Balzan",
                vehicle: "Ferrari 296 GT3",
                team: "Conquest Racing",
                number: "21",
            },
            thirdPlace: {
                driver1: "Chandler Hull",
                driver2: "Bill Auberlen",
                vehicle: "BMW M4 GT3",
                team: "BimmerWorld",
                number: "94",
            },
        };

        assert.deepEqual(podium, expected);
    });

    it("Should handle podiums and classes that have 2 entrants", () => {
        const cleanEntries = [gtwca[0], gtwca[1]].map((entry) =>
            cleanEntry(entry),
        );

        const podium = handleClassPodium(cleanEntries);

        const expected = {
            class: "Pro",
            firstPlace: {
                driver1: "Eric Filgueiras",
                driver2: "Stevan McAleer",
                vehicle: "Porsche GT3 R 992",
                team: "RS1",
                number: "28",
            },
            secondPlace: {
                driver1: "Manny Franco",
                driver2: "Alessandro Balzan",
                vehicle: "Ferrari 296 GT3",
                team: "Conquest Racing",
                number: "21",
            },
        };

        assert.deepEqual(podium, expected);
    });
    it("Should handle podiums and classes that have 1 entrants", () => {
        const cleanEntries = [gtwca[0]].map((entry) => cleanEntry(entry));

        const podium = handleClassPodium(cleanEntries);

        const expected = {
            class: "Pro",
            firstPlace: {
                driver1: "Eric Filgueiras",
                driver2: "Stevan McAleer",
                vehicle: "Porsche GT3 R 992",
                team: "RS1",
                number: "28",
            },
        };

        assert.deepEqual(podium, expected);
    });
});

describe("Single Driver podiums", () => {
    it("PlacementBuild Func Should take a single entry and return formatted for placement finish", () => {
        const entry = cleanEntry(gtam[0]);

        const expected = {
            number: "101",
            vehicle: "Mercedes-AMG GT3",
            team: "TKO Motorsports",
            driver1: "Memo Gidley",
        };

        const formatted = placementBuilder(entry);

        assert.deepEqual(formatted, expected);
    });

    it("Should handle full podiums", () => {
        const cleanEntries = gtam.map((entry) => cleanEntry(entry));

        const podium = handleClassPodium(cleanEntries);

        const expected = {
            class: "SRO3",
            firstPlace: {
                driver1: "Memo Gidley",
                vehicle: "Mercedes-AMG GT3",
                team: "TKO Motorsports",
                number: "101",
            },
            secondPlace: {
                driver1: "Jason Daskalos",
                vehicle: "Mercedes-AMG GT3",
                team: "CRP Racing",
                number: "27",
            },
            thirdPlace: {
                driver1: "Adam Adelson",
                vehicle: "Porsche 992 R GT3",
                team: "Wright Motorsports",
                number: "120",
            },
        };

        assert.deepEqual(podium, expected);
    });

    it("Should handle podiums with class 2 finishers", () => {
        const cleanEntries = [gtam[0], gtam[1]].map((entry) =>
            cleanEntry(entry),
        );

        const podium = handleClassPodium(cleanEntries);

        const expected = {
            class: "SRO3",
            firstPlace: {
                driver1: "Memo Gidley",
                vehicle: "Mercedes-AMG GT3",
                team: "TKO Motorsports",
                number: "101",
            },
            secondPlace: {
                driver1: "Jason Daskalos",
                vehicle: "Mercedes-AMG GT3",
                team: "CRP Racing",
                number: "27",
            },
        };

        assert.deepEqual(podium, expected);
    });

    it("Should handle podiums with class 1 finisher", () => {
        const cleanEntries = [cleanEntry(gtam[0])];

        const podium = handleClassPodium(cleanEntries);

        const expected = {
            class: "SRO3",
            firstPlace: {
                driver1: "Memo Gidley",
                vehicle: "Mercedes-AMG GT3",
                team: "TKO Motorsports",
                number: "101",
            },
        };

        assert.deepEqual(podium, expected);
    });
});

describe("Three Driver Podiums", () => {
    it("PlacementBuild Func Should take a single entry and return formatted for placement finish", () => {
        const entry = cleanEntry(igtc[0]);

        const expected = {
            number: "28",
            vehicle: "Porsche GT3 R 992",
            team: "RS1",
            driver1: "Eric Filgueiras",
            driver2: "Stevan McAleer",
            driver3: "Matt Campbell",
        };

        const formatted = placementBuilder(entry);

        assert.deepEqual(formatted, expected);
    });

    it("Should handle podiums that have 3 placements", () => {
        const cleanEntries = igtc.map((entry) => cleanEntry(entry));

        const podium = handleClassPodium(cleanEntries);

        const expected = {
            class: "Pro",
            firstPlace: {
                driver1: "Eric Filgueiras",
                driver2: "Stevan McAleer",
                driver3: "Matt Campbell",
                vehicle: "Porsche GT3 R 992",
                team: "RS1",
                number: "28",
            },
            secondPlace: {
                driver1: "Manny Franco",
                driver2: "Alessandro Balzan",
                driver3: "Alex Riberas",
                vehicle: "Ferrari 296 GT3",
                team: "Conquest Racing",
                number: "21",
            },
            thirdPlace: {
                driver1: "Chandler Hull",
                driver2: "Bill Auberlen",
                driver3: "Jon Edwards",
                vehicle: "BMW M4 GT3",
                team: "BimmerWorld",
                number: "94",
            },
        };

        assert.deepEqual(podium, expected);
    });

    it("Should handle podiums that have 2 placements", () => {
        const cleanEntries = [igtc[0], igtc[1]].map((entry) =>
            cleanEntry(entry),
        );

        const podium = handleClassPodium(cleanEntries);

        const expected = {
            class: "Pro",
            firstPlace: {
                driver1: "Eric Filgueiras",
                driver2: "Stevan McAleer",
                driver3: "Matt Campbell",
                vehicle: "Porsche GT3 R 992",
                team: "RS1",
                number: "28",
            },
            secondPlace: {
                driver1: "Manny Franco",
                driver2: "Alessandro Balzan",
                driver3: "Alex Riberas",
                vehicle: "Ferrari 296 GT3",
                team: "Conquest Racing",
                number: "21",
            },
        };

        assert.deepEqual(podium, expected);
    });

    it("Should handle podiums that have 1 placement", () => {
        const cleanEntries = [cleanEntry(igtc[0])];

        const podium = handleClassPodium(cleanEntries);

        const expected = {
            class: "Pro",
            firstPlace: {
                driver1: "Eric Filgueiras",
                driver2: "Stevan McAleer",
                driver3: "Matt Campbell",
                vehicle: "Porsche GT3 R 992",
                team: "RS1",
                number: "28",
            },
        };

        assert.deepEqual(podium, expected);
    });
});

//** Make test for multi class */
