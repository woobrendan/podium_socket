import { getClasses } from "./functions/entryFuncs";
import { handleClassPodium } from "./functions/resultFunc";

//** Once command goes to C(?) for checkered, push final messages into an arr, once list === length of entry list */
const getFinal = (resultArr, series) => {
    // return arr of classes based on series
    const classes = getClasses(series);

    const finResult = {
        series,
        date,
        event,

        // handle class will take the top 3 entries per class, and the class
        result1: handleClassPodium(/* pass object of result */),
        ...(result2
            ? { result2: { ...handleClassPodium(/* pass object of result */) } }
            : {}),
        ...(result3
            ? { result3: { ...handleClassPodium(/* pass object of result */) } }
            : {}),
        ...(result4
            ? { result4: { ...handleClassPodium(/* pass object of result */) } }
            : {}),

        // hard charger
        // fast lap
    };
};
