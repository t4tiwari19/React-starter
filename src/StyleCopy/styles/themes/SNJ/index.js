import { SNJ } from '../../../src/constants/brands.constants';
import colorPalette from './colorPalette';
import createThemeTypography from '../createThemeTypography';
import colors from '../TCP/colors';
import green from '../colors/green';
import blue from '../colors/blue';
import yellow from '../colors/yellow';
import purple from '../colors/purple';
import fonts from './fonts';
import { mediaQuery, breakpoints } from '../TCP/mediaQuery';
import opacity from '../TCP/opacity';
import spacing from '../TCP/spacing';
import zindex from '../TCP/zindex';
import gridDimensions from '../TCP/gridDimensions';
import brandSpecificStyles from './brand-specific-styles';
import shadow from './shadow';
import snjColors from './colors';

const brand = SNJ.toLowerCase();
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
  colors: { ...colors, ...snjColors },
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
