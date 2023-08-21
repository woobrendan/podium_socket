const printPage = () => {
  window.print();
};

const compareDate = (a, b) => {
  if (a.date < b.date) {
    return 1;
  }
  if (a.date > b.date) {
    return -1;
  }
  return 0;
};

const compareCarNumber = (a, b) => {
  if (Number(a.number) < Number(b.number)) {
    return -1;
  }
  if (Number(a.number) > Number(b.number)) {
    return 1;
  }
  return 0;
};

const shortenName = (seriesName) => {
  const obj = {
    "GT World Challenge America": "GTWCA",
    "GT America": "GTA",
    "TC America": "TCAM",
    "Pirelli GT4 America": "PGT4A",
    "Toyota GR Cup": "GR Cup",
    "Intercontinental GT Challenge": "IGTC",
  };
  return obj[seriesName];
};

const gtwca = "GT World Challenge America";
const tcam = "TC America";
const gtam = "GT America";
const gt4a = "Pirelli GT4 America";
const igtc = "Intercontinental GT Challenge";
const grCup = "Toyota GR Cup";

export {
  printPage,
  compareDate,
  compareCarNumber,
  gtwca,
  tcam,
  gtam,
  gt4a,
  igtc,
  grCup,
  shortenName,
};
