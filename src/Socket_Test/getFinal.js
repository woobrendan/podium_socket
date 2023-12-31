import { getClasses } from "./functions/entryFuncs";
import {
    getClassResults,
    handleClassPodium,
    getFastLap,
    formatHardCharger,
    formatDate,
} from "./functions/resultFunc";

//** Once command goes to C(?) for checkered, push final messages into an arr, once list === length of entry list */
const getFinal = (resultArr, series) => {
    // return arr of classes based on series
    const classes = getClasses(series);

    //** assuming resultArr is array of entries for current session, sort by class and return object with arr of class entries */
    const classResults = getClassResults(resultArr, classes);

    const finResult = {
        series,
        date: formatDate(/* take in command tz message */),
        event,
        fastLap:
            getFastLap(/* pass fast lap entry val along with fast lap time */),
        hardCharger:
            formatHardCharger(/* Pass hard charger entry along with startPos and gain */),
    };

    // handle class will take arr of results per class
    classes.forEach((classif, index) => {
        if (classResult[classif].length !== 0) {
            finResult[`result${index + 1}`] = {
                ...handleClassPodium(classResults[classes[index]]),
            };
        }
    });

    return finResult;
};
