// 9fbef606107a605d69c0edbcd8029e5d
import { createGlobalStyle } from 'styled-components';
import globalStyles from './commonStyles';

import { GYM, SNJ, TCP, PJP } from '../../src/constants/brands.constants';

import gymFontFaces from '../themes/Gymboree/fontFaces';
import tcpFontFaces from '../themes/TCP/fontFaces';
import snjFontFaces from '../themes/SNJ/fontFaces';
import pjpFontFaces from '../themes/PJP/fontFaces';

const FONT_FACE_MAPPING = {
  [TCP]: tcpFontFaces,
  [GYM]: gymFontFaces,
  [SNJ]: snjFontFaces,
  [PJP]: pjpFontFaces,
};

// eslint-disable-next-line no-unused-expressions
export default createGlobalStyle`
  ${(props) => FONT_FACE_MAPPING[props.theme.brand.toUpperCase()]}
  ${globalStyles}
`;
