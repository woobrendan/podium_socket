import { getClasses } from "./functions/entryFuncs";
import { getClassResults, handleClassPodium } from "./functions/resultFunc";

//** Once command goes to C(?) for checkered, push final messages into an arr, once list === length of entry list */
const getFinal = (resultArr, series) => {
    // return arr of classes based on series
    const classes = getClasses(series);

    //** assuming resultArr is array of entries for current session, sort by class and return object with arr of class entries */
    const classResults = getClassResults(resultArr, classes);

    const finResult = {
        series,
        date,
        event,

        // handle class will take arr of results per class
        result1: handleClassPodium(classResults[classes[0]]),
        ...(result2
            ? { result2: { ...handleClassPodium(classResults[classes[1]]) } }
            : {}),
        ...(result3
            ? { result3: { ...handleClassPodium(classResults[classes[2]]) } }
            : {}),
        ...(result4
            ? { result4: { ...handleClassPodium(classResults[classes[3]]) } }
            : {}),

        // hard charger
        // fast lap
    };
};
