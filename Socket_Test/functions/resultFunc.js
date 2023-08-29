//** Build out result(x) creating entry info for each placement, and setting class */
const handleClassPodium = (result) => {
    const { firstPlace, secondPlace, thirdPlace } = result;

    return {
        class: result.class,
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
                  driver2: `${drivers[1].firstname} ${drivers[1].lastName}`,
              }
            : {}),
        ...(drivers[2]
            ? {
                  driver3: `${drivers[2].firstname} ${drivers[2].lastName}`,
              }
            : {}),
        vehicle,
        team: teamName,
        number,
    };
};

//** Take in array of classes, create an object with classes as keys and push entries to matching class */
const getClassResults = (resultsArr, classList) => {
    const classObj = {};

    classList.forEach((className) => {
        classObj[className] = [];
    });
};

export { handleClassPodium };
