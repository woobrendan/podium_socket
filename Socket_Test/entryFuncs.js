const shortenName = (seriesName) => {
    const obj = {
        "Fanatec GT World Challenge America": "FGTWCA",
        "GT America": "GTA",
        "TC America": "TCAM",
        "Pirelli GT4 America": "GT4 America",
        "Toyota GR Cup": "GR Cup",
        "Intercontinental GT Challenge": "IGTC",
    };
    return obj[seriesName];
};

const cleanEntry = (entry) => {
    const keysToKeep = [
        "mlpEntryId",
        "teamName",
        "vehicle",
        "manufacturer",
        "number",
        "series",
        "class",
        "drivers",
    ];
    const driverKeys = ["firstName", "lastName"];

    for (const key in entry) {
        if (!keysToKeep.includes(key)) {
            delete entry[key];
        }
    }

    entry.drivers.forEach((driver) => {
        for (const key in driver) {
            if (!driverKeys.includes(key)) {
                delete driver[key];
            }
        }
    });

    return entry;
};

export { shortenName, cleanEntry };
