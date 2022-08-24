export const generateRandomHexColor = () => {
  let hex = "#";
  for (let index = 0; index < 6; index++) {
    hex += getRandomHexadecimal();
  }
  return hex;
};

export const generateRandomRGBAColor = (): string => {
  return `rgba(${getRandom256bitColor()},${getRandom256bitColor()}, ${getRandom256bitColor()})`;
};

const getRandomHexadecimal = () => {
  const keys = "0123456789ABCDEF";
  const index = Math.round(Math.random() * 15);
  return keys.charAt(index);
};

const getRandom256bitColor = () => {
  return Math.round(Math.random() * 255);
};
