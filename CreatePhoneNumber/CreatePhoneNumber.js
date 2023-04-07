const firstHandler = (str) => {
  return "(" + str + ") ";
};

const secondHandler = (str) => {
  return str + "-";
};

const createPhoneNumber = (str) => {
  const first = firstHandler(str.slice(0, 3).join(""));
  const second = secondHandler(str.slice(3, 6).join(""));
  const final = str.slice(6, 11).join("");

  return first + second + final;
};

module.exports = { firstHandler, secondHandler, createPhoneNumber };
