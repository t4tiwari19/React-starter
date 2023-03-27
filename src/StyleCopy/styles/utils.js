const snjGradientBackgroundPosition = (totalItems = 1, selectedIndex = 0) => {
  let xPos = 0;
  if (totalItems > 1 && selectedIndex < totalItems) {
    xPos = selectedIndex * Math.floor(100 / (totalItems - 1));
  }
  return `${xPos}% 50%`;
};

const snjGradientBackgroundSize = (baseVw = 100, incrementVw = 25, totalItems = 1) => {
  const multiplier = totalItems > 8 ? Math.ceil(totalItems - 8) / 2 : 0;
  return `calc(${baseVw}vw + (${incrementVw}vw * ${multiplier}))`;
};

export { snjGradientBackgroundPosition, snjGradientBackgroundSize };
