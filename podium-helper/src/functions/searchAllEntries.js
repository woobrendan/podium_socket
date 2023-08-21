const searchAllEntries = (entries, searchVal) => {
  if (!searchVal.trim()) {
    return entries;
  }
  const filtered = entries.filter((val) => {
    const { driver1, driver2, series, number, team, vehicle, classification } =
      val;

    if (driver1.name.toLowerCase().includes(searchVal.toLowerCase())) {
      return val;
    }
    if (vehicle.toLowerCase().includes(searchVal.toLowerCase())) {
      return val;
    }
    if (team.toLowerCase().includes(searchVal.toLowerCase())) {
      return val;
    }
    if (driver1.rating.toLowerCase().includes(searchVal.toLowerCase())) {
      return val;
    }

    if (driver1.nationality.toLowerCase().includes(searchVal.toLowerCase())) {
      return val;
    }
    if (series.toLowerCase().includes(searchVal.toLowerCase())) {
      return val;
    }
    if (number.includes(searchVal)) {
      return val;
    }
    if (classification.includes(searchVal)) {
      return val;
    }

    if (driver2?.name.toLowerCase().includes(searchVal.toLowerCase())) {
      return val;
    }
    if (driver2?.rating.toLowerCase().includes(searchVal.toLowerCase())) {
      return val;
    }
    if (driver2?.nationality.toLowerCase().includes(searchVal.toLowerCase())) {
      return val;
    }
  });
  return filtered;
};

export default searchAllEntries;
