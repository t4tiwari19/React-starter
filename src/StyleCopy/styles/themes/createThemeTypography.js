// 9fbef606107a605d69c0edbcd8029e5d
import {
  LETTER_SPACINGS,
  LINE_HEIGHTS,
  TEXT_ALIGNS,
  FONT_WEIGHTS,
  FONT_WEIGHT_NAMES,
  FONT_SIZES,
} from './typography.constants';

import {
  FONTS as TCP_FONTS,
  ANDROID_FONTS as ANDROID_TCP_FONTS,
  IOS_FONTS as IOS_TCP_FONTS,
} from './TCP/fonts';

import {
  FONTS as GYM_FONTS,
  ANDROID_FONTS as ANDROID_GYM_FONTS,
  IOS_FONTS as IOS_GYM_FONTS,
} from './Gymboree/fonts';

import {
  FONTS as SNJ_FONTS,
  ANDROID_FONTS as ANDROID_SNJ_FONTS,
  IOS_FONTS as IOS_SNJ_FONTS,
} from './SNJ/fonts';

import {
  FONTS as PJP_FONTS,
  ANDROID_FONTS as ANDROID_PJP_FONTS,
  IOS_FONTS as IOS_PJP_FONTS,
} from './PJP/fonts';

const BASE_HEADING_TYPOGRAPHY = {
  fontFamily: 'primary',
  fontSize: ['fs48', 'fs48', 'fs64'],
  fontWeight: 'black',
  letterSpacing: 'normal',
  lineHeight: 'normal',
};

const brandSpecificFonts = {
  gym: GYM_FONTS,
  tcp: TCP_FONTS,
  snj: SNJ_FONTS,
  pjp: PJP_FONTS,
};

const brandSpecificAndroidFonts = {
  gym: ANDROID_GYM_FONTS,
  tcp: ANDROID_TCP_FONTS,
  snj: ANDROID_SNJ_FONTS,
  pjp: ANDROID_PJP_FONTS,
};

const brandSpecificIosFonts = {
  gym: IOS_GYM_FONTS,
  tcp: IOS_TCP_FONTS,
  snj: IOS_SNJ_FONTS,
  pjp: IOS_PJP_FONTS,
};

function createThemeTypography(theme = {}) {
  const { typography = {}, brand } = theme;
  const {
    fonts = brandSpecificFonts[brand],
    letterSpacings = LETTER_SPACINGS,
    lineHeights = LINE_HEIGHTS,
    textAligns = TEXT_ALIGNS,
    fontWeights = FONT_WEIGHTS,
    fontWeightsNames = FONT_WEIGHT_NAMES,
    fontSizes = FONT_SIZES,
  } = typography;

  const {
    h1 = {
      ...BASE_HEADING_TYPOGRAPHY,
      fontSize: ['fs48', 'fs48', 'fs64'],
    },
    h2 = {
      ...BASE_HEADING_TYPOGRAPHY,
      fontSize: ['fs32', 'fs32', 'fs48'],
    },
    h3 = {
      ...BASE_HEADING_TYPOGRAPHY,
      fontSize: ['fs20', 'fs20', 'fs36'],
      letterSpacing: ['ls167', 'ls167', 'ls271'],
    },
    h4 = {
      ...BASE_HEADING_TYPOGRAPHY,
      fontSize: ['fs20', 'fs20', 'fs32'],
      fontWeight: 'semibold',
      letterSpacing: ['ls222', 'ls222', 'ls257'],
    },
    h5 = {
      ...BASE_HEADING_TYPOGRAPHY,
      fontSize: ['fs14', 'fs16', 'fs20'],
      fontWeight: 'normal',
    },
    h6 = {
      ...BASE_HEADING_TYPOGRAPHY,
      fontSize: 'fs16',
      fontFamily: 'secondary',
      fontWeight: 'semibold',
    },
    nav = {
      ...BASE_HEADING_TYPOGRAPHY,
      fontSize: 'fs15',
      fontFamily: 'secondary',
      fontWeight: 'semibold',
    },
    listMenu = {
      ...BASE_HEADING_TYPOGRAPHY,
      fontSize: 'fs14',
      fontFamily: 'secondary',
      fontWeight: 'semibold',
      lineHeight: ['lh115', 'lh115', 'lh107'],
    },
    navMinified = {
      ...BASE_HEADING_TYPOGRAPHY,
      fontSize: 'fs13',
      fontFamily: 'secondary',
      fontWeight: 'semibold',
      lineHeight: ['lh115', 'lh115', 'lh107'],
    },
  } = typography;

  return {
    fonts,
    androidFonts: brandSpecificAndroidFonts[brand],
    iosFonts: brandSpecificIosFonts[brand],
    fontWeights,
    fontWeightsNames,
    fontSizes,
    letterSpacings,
    lineHeights,
    textAligns,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    nav,
    listMenu,
    navMinified,
  };
}

export default createThemeTypography;
