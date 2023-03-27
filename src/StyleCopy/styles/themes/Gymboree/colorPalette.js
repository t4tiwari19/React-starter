import orange from '../colors/orange';
import createThemeColorPalette from '../createThemeColorPalette';

const colorPalette = createThemeColorPalette({
  primary: {
    light: orange[300],
    main: orange[800],
    dark: orange[900],
  },
});

export default colorPalette;
