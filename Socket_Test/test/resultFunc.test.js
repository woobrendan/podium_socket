import { assert } from "chai";
import { formatDate } from "../functions/resultFunc";

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
        console.log(date);

        assert.equal(date, "5-20-2023");
    });
});
