// use to get driver and event ID based on given name as string
const getIdFromArray = (name, arr) => {
  for (const val of arr) {
    if (val.name === name) {
      return val.id;
    }
  }
};

const getVehicleId = (num, vehicles) => {
  for (const vehicle of vehicles) {
    if (vehicle.number === num) {
      return vehicle.id;
    }
  }
};

// create copy of results useState to get proper values to pass. change values of drivers into their id number for backend
const formSQLPodium = (results) => {
  const { result1, result2, result3, result4 } = results;

  return {
    ...results,
    result1: getResult(result1),
    ...(result2 ? { result2: getResult(result2) } : {}),
    ...(result3 ? { result3: getResult(result3) } : {}),
    ...(result4 ? { result4: getResult(result4) } : {}),
    event: getIdFromArray(results.event, events),
    series: getIdFromArray(results.series, series),
    fastLap: { ...value, id: getIdFromArray(value.driver, drivers) },
  };
};

const getResult = (result) => {
  const { firstPlace, secondPlace, thirdPlace } = result;
  return {
    class: getIdFromArray(result.class, classCategory),
    firstPlace: getVehicleId(firstPlace.number, vehicles),
    ...(secondPlace
      ? { secondPlace: getVehicleId(secondPlace.number, vehicles) }
      : null),
    ...(thirdPlace
      ? { thirdPlace: getVehicleId(thirdPlace.number, vehicles) }
      : null),
  };
};

export default formSQLPodium;
