// 9fbef606107a605d69c0edbcd8029e5d
import colorPalette from './colorPalette';
import createThemeTypography from '../createThemeTypography';
import green from '../colors/green';
import blue from '../colors/blue';
import purple from '../colors/purple';
import zindex from '../TCP/zindex';
import spacing from '../TCP/spacing';
import gridDimensions from '../TCP/gridDimensions';
import { mediaQuery, breakpoints } from '../TCP/mediaQuery';
import gymboreeTypography from './gymboreeTypography';
import opacity from '../TCP/opacity';
import colors from '../TCP/colors';
import fonts from '../TCP/fonts';
import brandSpecificStyles from './brand-specific-styles';
import shadow from './shadow';
import gymColors from './colors';

const brand = 'gym';

const typography = createThemeTypography({
  typography: gymboreeTypography,
  brand,
});

const themeGymboree = {
  colorPalette: { ...colorPalette, green, blue, purple },
  brand,
  isGymboree: true,
  /* colors object has been deprecated and, will be removed in the future release.
   Please use colorPalette instead */
  colors: { ...colors, ...gymColors },
  /* fonts object has been deprecated and, will be removed in the future release.
  Please use typography instead */
  fonts,
  typography,
  mediaQuery,
  breakpoints,
  zindex,
  gridDimensions,
  opacity,
  spacing,
  brandSpecificStyles,
  shadow,
};

export default themeGymboree;
