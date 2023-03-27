// 9fbef606107a605d69c0edbcd8029e5d
export const breakpoints = {
  small: '360px',
  smallMax: '767px',
  medium: '768px',
  mediumMax: '1199px',
  large: '1200px',
  largeMax: '1439px',
  xlarge: '1440px',
  desktop: '1920px',
  maxWidth: 1440,
  keys: ['xs', 'sm', 'lg'],
  values: { xs: 0, sm: 768, lg: 1200 },
};

export const mediaQuery = {
  small: `(min-width: ${breakpoints.small})`,
  smallMax: `(max-width: ${breakpoints.smallMax})`,
  smallOnly: `
    (min-width: ${breakpoints.small})
    and
    (max-width: ${breakpoints.smallMax})
  `,
  medium: `(min-width: ${breakpoints.medium})`,
  mediumMax: `(max-width: ${breakpoints.mediumMax})`,
  mediumOnly: `
    (min-width: ${breakpoints.medium})
    and
    (max-width: ${breakpoints.mediumMax})
  `,
  mediumOnlyPortrait: `
    (min-width: ${breakpoints.medium})
    and
    (max-width: ${breakpoints.mediumMax})
    and
    (orientation: portrait)
  `,
  large: `(min-width: ${breakpoints.large})`,
  largeMax: `(max-width: ${breakpoints.largeMax})`,
  largeOnly: `
    (min-width: ${breakpoints.large})
    and
    (max-width: ${breakpoints.largeMax})
  `,
  xlarge: `(min-width: ${breakpoints.xlarge})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
};
