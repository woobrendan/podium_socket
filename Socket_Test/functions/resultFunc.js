const handleClassPodium = (result) => {
    const { firstPlace, secondPlace, thirdPlace } = result;

    const firstDrivers = firstPlace.drivers;
    const secondDriers = secondPlace.drivers;
    const thirdDrivers = thirdPlace.drivers;

    const finResult = {
        class: result.class,
        firstPlace: {
            driver1: `${firstDrivers[0].firstname} ${firstDrivers[0].lastName}`,
            ...(firstDrivers[1]
                ? {
                      driver2: `${firstDrivers[1].firstname} ${firstDrivers[1].lastName}`,
                  }
                : {}),
            vehicle: firstPlace.vehicle,
            team: firstPlace.teamName,
            number: firstPlace.number,
        },
    };
};
