//** Build out result(x) creating entry info for each placement, and setting class */
// Should come in as array of result per class
const handleClassPodium = (result) => {
    const [firstPlace, secondPlace, thirdPlace] = result;

    return {
        class: firstPlace.class,
        firstPlace: { ...placementBuilder(firstPlace) },
        ...(secondPlace
            ? { secondPlace: { ...placementBuilder(secondPlace) } }
            : {}),
        ...(thirdPlace
            ? { thirdPlace: { ...placementBuilder(thirdPlace) } }
            : {}),
    };
};

//** Take result for 1st, 2nd or 3rd and create object with entry information in shape expected for table */
const placementBuilder = (placement) => {
    const { vehicle, teamName, number, drivers } = placement;

    return {
        driver1: `${drivers[0].firstName} ${drivers[0].lastName}`,
        ...(drivers[1]
            ? {
                  driver2: `${drivers[1].firstName} ${drivers[1].lastName}`,
              }
            : {}),
        ...(drivers[2]
            ? {
                  driver3: `${drivers[2].firstName} ${drivers[2].lastName}`,
              }
            : {}),
        vehicle,
        team: teamName,
        number,
    };
};

//** Take in array of classes, create an object with classes as keys and push entries to matching class */
const getClassResults = (resultsArr, classList) => {
    const classObj = classList.reduce((obj, className) => {
        obj[className] = [];
        return obj;
    }, {});

    for (const entry of resultsArr) {
        if (classObj.hasOwnProperty(entry.class)) {
            classObj[entry.class].push(entry);
        }
    }

    //sort by points and take top 3

    return classObj;
};

// Refactor later to figure out WHO is the fast lap driver
const getFastLap = (entry, laptime) => {
    const { drivers } = entry;
    return {
        driver: `${drivers[0].firstName} ${drivers[0].lastName}`,
        laptime /* stringify the time value*/,
    };
};

//** Refactor Later ----  use to take in entry and return the information shaped for hard charger */
const formatHardCharger = (entry, startPos, gain) => {
    const { drivers, series, number, vehicle, teamName } = entry;

    const newEntry = {
        series,
        number,
        vehicle,
        team: teamName,
    };

    drivers.forEach((driver, index) => {
        newEntry[
            `driver${index + 1}`
        ] = `${driver.firstName} ${driver.lastName}`;
    });

    const hardCharger = {
        entryNum: number,
        startPos,
        gain,
        entry: newEntry,
    };

    return hardCharger;
};

//** Format date in expected format for table ex: "08-30-2023" */
const formatDate = (message) => {
    // message = {
    //     _level: 0,
    //     _key: "$USAC:TZ",
    //     command: "$USAC:TZ",
    //     tz: "America/Chicago",
    //     offset: "-05:00",
    //     timestamp: 1684619282564000,
    // };
    const { tz, timestamp } = message;

    const milliseconds = timestamp / 1000;

    const date = new Date(milliseconds);

    // return date string as "08/30/2023"
    const dateArr = date.toLocaleString("en-US", { tz }).split(",")[0];

    return dateArr.replace(/\//g, "-");
};

// Take in command R message
const getSeries = (message) => {
    const seriesRunName = message.runName.split(" ");

    // string runname is "Fanatec GT World Challenge Race 1", remove Race 1 from string
    if (seriesRunName.includes("F")) {
        // run arr will be ['fanatec' .....'race', '1'], just keep gtwc
        const series = seriesRunName.split(" ").slice(1, 4).join(" ");
        return series + " America";
    }

    return seriesShortHand;
};

export {
    handleClassPodium,
    getClassResults,
    getFastLap,
    formatHardCharger,
    formatDate,
    placementBuilder,
};
