const splitString = (str) => {
  return str.split(", ");
};

const checkSymbol = (anyFloat) => {
  const allowContain = "-.0123456789";
  for (var i in anyFloat) {
    console.log(i);
    if (allowContain.indexOf(anyFloat[i]) === -1) {
      return false;
    }
  }

  return true;
};

const checkFirst = (firstFloat) => {
  firstFloat = Math.round(firstFloat);
  if (firstFloat < 0) {
    firstFloat = -firstFloat;
  }
  if (firstFloat >= 0 && firstFloat <= 90) {
    return true;
  }

  return false;
};

const checkSecond = (secondFloat) => {
  secondFloat = Math.round(secondFloat);
  if (secondFloat < 0) {
    secondFloat = -secondFloat;
  }
  if (secondFloat >= 0 && secondFloat <= 180) {
    return true;
  }

  return false;
};

const isVaildCoordinates = (coordinates) => {
  const [first, second] = splitString(coordinates);
  if (checkSymbol(first) && checkSymbol(second)) {
    const firstAns = checkFirst(first);
    const secondAns = checkSecond(second);
    if (firstAns && secondAns) return true;
  }

  return false;
};

module.exports = {
  splitString,
  isVaildCoordinates,
  checkFirst,
  checkSecond,
  checkSymbol,
};
