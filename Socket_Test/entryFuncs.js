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

export { shortenName };
