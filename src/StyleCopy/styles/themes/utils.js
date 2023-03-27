// 9fbef606107a605d69c0edbcd8029e5d 
const getColor = (colorPalette, colorKey, defaultColor = null) => {
  if (!colorKey) {
    return defaultColor || colorPalette.blue[700];
  }
  const colorSpliter = colorKey.split('.');
  return colorSpliter.length > 1
    ? colorPalette[colorSpliter[0]][colorSpliter[1]]
    : colorPalette[colorSpliter[0]];
};

const getFontSize = (typography, size) => {
  const { fontSizes } = typography;
  return fontSizes[size] || fontSizes.fs20;
};

export { getColor, getFontSize };
