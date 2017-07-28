export function filterData(data) {
  return data.states.filter(datapoint => !!datapoint[8]).map(datapoint => ({
    id: datapoint[0],
    originCountry: datapoint[2],
  }));
}
