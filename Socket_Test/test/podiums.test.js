import { assert } from "chai";
import {
    handleClassPodium,
    placementBuilder,
} from "../functions/resultFunc.js";
import entries from "./testEntries.js";
import { cleanEntry } from "../functions/entryFuncs.js";

describe("Creating podium results for class finishers", () => {
    it("PlacementBuild Func Should take a single entry and return formatted for placement finish", () => {
        const entry = cleanEntry(entries[0]);

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
        const cleanEntries = entries.map((entry) => cleanEntry(entry));

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
        const cleanEntries = [entries[0], entries[1]].map((entry) =>
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
        const cleanEntries = [entries[0]].map((entry) => cleanEntry(entry));

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
    it("Should handle podiums and classes that have 3 drivers", () => {});
});