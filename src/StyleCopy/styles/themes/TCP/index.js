// 9fbef606107a605d69c0edbcd8029e5d
import createThemeColorPalette from '../createThemeColorPalette';
import createThemeTypography from '../createThemeTypography';
import colors from './colors';
import shadow from './shadow';
import green from '../colors/green';
import blue from '../colors/blue';
import yellow from '../colors/yellow';
import purple from '../colors/purple';
import fonts from './fonts';
import zindex from './zindex';
import spacing from './spacing';
import gridDimensions from './gridDimensions';
import { mediaQuery, breakpoints } from './mediaQuery';
import brandSpecificStyles from './brand-specific-styles';

import opacity from './opacity';

const brand = 'tcp';
const colorPalette = createThemeColorPalette();
const typography = createThemeTypography({
  brand,
});

const theme = {
  brand,
  isGymboree: false,
  /* add required colors other than default as per theme requirement */
  colorPalette: { ...colorPalette, green, blue, yellow, purple },
  /* colors object has been deprecated and, will be removed in the future release.
   Please use colorPalette instead */
  colors,
  typography,
  /* fonts object has been deprecated and, will be removed in the future release.
   Please use typography instead */
  fonts,
  mediaQuery,
  breakpoints,
  zindex,
  gridDimensions,
  opacity,
  spacing,
  brandSpecificStyles,
  shadow,
};

export default theme;
