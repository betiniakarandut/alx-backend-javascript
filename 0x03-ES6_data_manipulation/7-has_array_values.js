export default function hasValuesFromArray(setVal, arrayVal) {
  return arrayVal.every((element) => setVal.has(element));
}
