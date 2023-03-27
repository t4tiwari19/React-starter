// 9fbef606107a605d69c0edbcd8029e5d 
import createRwdStyleSystem from './createRwdStyleSystem';

const colorConfig = {
  color: {
    prop: 'color',
    themeProp: 'colorPalette',
  },
  backgroundColor: {
    prop: 'background-color',
    themeProp: 'colorPalette',
  },
};

export default createRwdStyleSystem(colorConfig);
