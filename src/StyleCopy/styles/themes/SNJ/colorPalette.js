import purple from '../colors/purple';
import createThemeColorPalette from '../createThemeColorPalette';

const colorPalette = createThemeColorPalette({
  primary: {
    light: purple[300],
    main: purple[800],
    dark: purple[900],
  },
});

export default colorPalette;
