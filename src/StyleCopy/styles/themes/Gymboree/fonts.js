// 9fbef606107a605d69c0edbcd8029e5d
const PRIMARY_FONTS = 'Montserrat';
const SECONDARY_FONTS = 'Nunito';
const URBAN_ROUNDED = 'Urbane Rounded';

const getAndroidFont = (fontName) => fontName.split(/\s/).join('').toLowerCase();

export const FONTS = {
  primary: PRIMARY_FONTS,
  secondary: SECONDARY_FONTS,
};

export default {
  primary: PRIMARY_FONTS,
  secondary: SECONDARY_FONTS,
  urbaneRounded: URBAN_ROUNDED,
};

// Fonts in android read font file name
export const ANDROID_FONTS = {
  primary: 'montserrat',
  secondary: 'nunito',
  urbaneRounded: getAndroidFont(URBAN_ROUNDED),
};

export const IOS_FONTS = {
  primary: 'Montserrat',
  secondary: 'Nunito',
  urbaneRounded: URBAN_ROUNDED,
};
