const handleClassPodium = (result) => {
    const { firstPlace, secondPlace, thirdPlace } = result;

    const firstDrivers = firstPlace.drivers;
    const secondDriers = secondPlace.drivers;
    const thirdDrivers = thirdPlace.drivers;

    const finResult = {
        class: result.class,
        firstPlace: {
            driver1: `${firstDrivers[0].firstname} ${firstDrivers[0].lastName}`,
            vehicle: firstPlace.vehicle,
            team: firstPlace.teamName,
        },
    };
};
