import colorPalette from './colorPalette';
import createThemeTypography from '../createThemeTypography';
import green from '../colors/green';
import blue from '../colors/blue';
import purple from '../colors/purple';
import zindex from '../TCP/zindex';
import spacing from '../TCP/spacing';
import gridDimensions from '../TCP/gridDimensions';
import { mediaQuery, breakpoints } from '../TCP/mediaQuery';
import pjplaceTypography from './pjplaceTypography';
import opacity from '../TCP/opacity';
import colors from '../TCP/colors';
import pjpColors from './colors';
import fonts from './fonts';
import brandSpecificStyles from './brand-specific-styles';
import shadow from './shadow';

const brand = 'pjp';

const typography = createThemeTypography({
  typography: pjplaceTypography,
  brand,
});

const themepjPlace = {
  colorPalette: { ...colorPalette, green, blue, purple },
  brand,
  isPJP: true,
  /* colors object has been deprecated and, will be removed in the future release.
   Please use colorPalette instead */
  colors: { ...colors, ...pjpColors },
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

export default themepjPlace;
