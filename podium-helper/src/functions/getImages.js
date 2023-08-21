import {
  bmwLogo,
  porscheLogo,
  mercedesLogo,
  acuraLogo,
  astonMartin,
  ferrari,
  ginetta,
  honda,
  lamborghini,
  MINI,
  toyota,
  audi,
  corvette,
  hyundai,
  nissan,
  saleen,
  ford,
} from "../images/manuf__Logos";
import sro from "../images/SRO.jpg";
import {
  gtwca_pro,
  gtwca_am,
  gtwca_ProAm,
  gtwca_silver,
  gt4_proam,
  gt4_am,
  gt4_silver,
  tcx,
  tc,
  tca,
  gtam_gt2,
  gtam_gt3,
  gtam_gt4,
} from "../images/class_logos";
import { gt4a } from "./helperFunc";

// const getManufLogo = (vehicle) => {
//   if (vehicle.includes("Porsche")) return porscheLogo;
//   if (vehicle.includes("BMW")) return bmwLogo;
//   if (vehicle.includes("Mercedes")) return mercedesLogo;
//   if (vehicle.includes("Acura")) return acuraLogo;
//   if (vehicle.includes("Aston")) return astonMartin;
//   if (vehicle.includes("Ferrari")) return ferrari;
//   if (vehicle.includes("Ginetta")) return ginetta;
//   if (vehicle.includes("Honda")) return honda;
//   if (vehicle.includes("Lambo")) return lamborghini;
//   if (vehicle.includes("MINI")) return MINI;
//   if (vehicle.includes("Toyota")) return toyota;
//   if (vehicle.includes("Audi")) return audi;
//   if (vehicle.includes("Corvette")) return corvette;
//   if (vehicle.includes("Hyundai")) return hyundai;
//   if (vehicle.includes("Nissan")) return nissan;
//   if (vehicle.includes("Saleen")) return saleen;
//   if (vehicle.includes("Ford")) return ford;
//   return sro;
// };

const vehicleLogos = {
  Porsche: porscheLogo,
  BMW: bmwLogo,
  "Mercedes-AMG": mercedesLogo,
  Acura: acuraLogo,
  Aston: astonMartin,
  Ferrari: ferrari,
  Ginetta: ginetta,
  Honda: honda,
  Lamborghini: lamborghini,
  MINI: MINI,
  Toyota: toyota,
  Audi: audi,
  Corvette: corvette,
  Hyundai: hyundai,
  Nissan: nissan,
  Saleen: saleen,
  Ford: ford,
};

const getManufLogo = (vehicle) => {
  const vehicleName = vehicle.split(" ")[0];
  const logo = vehicleLogos[vehicleName];
  return logo ? logo : sro;
};

// classif === classification
const getClassBannerImg = (classif, series) => {
  if (classif === "TCX") return tcx;
  if (classif === "TC") return tc;
  if (classif === "TCA") return tca;
  if (classif === "SRO3" || classif === "Masters") return gtam_gt3;
  if (classif === "GT4") return gtam_gt4;
  if (classif === "GT2") return gtam_gt2;
  // if (series === grCup) return

  if (classif === "Pro-Am") {
    return series === gt4a ? gt4_proam : gtwca_ProAm;
  }
  if (classif === "Am") {
    // if (series === grCup)
    return series === gt4a ? gt4_am : gtwca_am;
  }

  if (classif === "Silver") {
    return series === gt4a ? gt4_silver : gtwca_silver;
  }
  return gtwca_pro;
};

export { getClassBannerImg, getManufLogo };
