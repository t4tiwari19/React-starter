import { css } from 'styled-components';
import { getFontsURL } from '@tcp/core/src/utils';

// TODO: issue on semibold 500 or 600 font; Can we set semibold === 500 or 600
export default css`
  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Quicksand Medium'), local('Quicksand-Medium'),
      url(${getFontsURL('fonts/Quicksand-Medium.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Quicksand SemiBold'), local('Quicksand-SemiBold'),
      url(${getFontsURL('fonts/Quicksand-SemiBold.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Quicksand Bold'), local('Quicksand-Bold'),
      url(${getFontsURL('fonts/Quicksand-Bold.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('Quicksand ExtraBold'), local('Quicksand-ExtraBold'),
      url(${getFontsURL('fonts/Quicksand-SemiBold.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local('Quicksand Black'), local('Quicksand-Black'),
      url(${getFontsURL('fonts/Quicksand-Bold.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Nunito SemiBold'), local('Nunito-SemiBold'),
      url(${getFontsURL('fonts/Nunito-600.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Nunito-600.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Nunito Bold'), local('Nunito-Bold'),
      url(${getFontsURL('fonts/Nunito-700.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Nunito-700.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('Nunito ExtraBold'), local('Nunito-ExtraBold'),
      url(${getFontsURL('fonts/Nunito-800.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Nunito-800.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local('Nunito Black'), local('Nunito-Black'),
      url(${getFontsURL('fonts/Nunito-900.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/Nunito-900.woff')}) format('woff');
  }

  @font-face {
    font-family: 'TofinoCond';
    font-style: normal;
    font-weight: 400;
    src: local('TofinoCond Regular'), local('TofinoCond-Regular'),
      url(${getFontsURL('fonts/TofinoCond-Regular.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/TofinoCond-Regular.woff')}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'TofinoCond';
    font-style: normal;
    font-weight: 500;
    src: local('TofinoCond Medium'), local('TofinoCond-Medium'),
      url(${getFontsURL('fonts/TofinoCond-Medium.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/TofinoCond-Medium.woff')}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'TofinoCond';
    font-style: normal;
    font-weight: 600;
    src: local('TofinoCond Semibold'), local('TofinoCond-Semibold'),
      url(${getFontsURL('fonts/TofinoCond-Semibold.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/TofinoCond-Semibold.woff')}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'TofinoCond';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('TofinoCond Bold'), local('TofinoCond-Bold'),
      url(${getFontsURL('fonts/TofinoCond-Bold.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/TofinoCond-Bold.woff')}) format('woff');
  }

  @font-face {
    font-family: 'TofinoWide';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('TofinoWide Regular'), local('TofinoWide-Regular'),
      url(${getFontsURL('fonts/TofinoWide-Regular.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/TofinoWide-Regular.woff')}) format('woff');
  }

  @font-face {
    font-family: 'TofinoWide';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('TofinoWide Medium'), local('TofinoWide-Medium'),
      url(${getFontsURL('fonts/TofinoWide-Medium.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/TofinoWide-Medium.woff')}) format('woff');
  }

  @font-face {
    font-family: 'TofinoWide';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('TofinoWide Semibold'), local('TofinoWide-Semibold'),
      url(${getFontsURL('fonts/TofinoWide-Semibold.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/TofinoWide-Semibold.woff')}) format('woff');
  }

  @font-face {
    font-family: 'TofinoWide';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('TofinoWide Bold'), local('TofinoWide-Bold'),
      url(${getFontsURL('fonts/TofinoWide-Bold.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/TofinoWide-Bold.woff')}) format('woff');
  }

  @font-face {
    font-family: 'TofinoWide';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local('TofinoWide Black'), local('TofinoWide-Black'),
      url(${getFontsURL('fonts/TofinoWide-Black.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/TofinoWide-Black.woff')}) format('woff');
  }

  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('WorkSans Regular'), local('WorkSans-Regular'),
      url(${getFontsURL('fonts/WorkSans-Regular.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/WorkSans-Regular.woff')}) format('woff');
  }

  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('WorkSans Medium'), local('WorkSans-Medium'),
      url(${getFontsURL('fonts/WorkSans-Medium.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/WorkSans-Medium.woff')}) format('woff');
  }

  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('WorkSans Semibold'), local('WorkSans-Semibold'),
      url(${getFontsURL('fonts/WorkSans-Semibold.woff2')}) format('woff2'),
      url(${getFontsURL('fonts/WorkSans-Semibold.woff')}) format('woff');
  }
`;
