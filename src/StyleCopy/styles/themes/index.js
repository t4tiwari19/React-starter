// 9fbef606107a605d69c0edbcd8029e5d
import themeTCP from './TCP';
import themeGymboree from './Gymboree';
import themeSNJ from './SNJ';
import themePJP from './PJP';
import { getAPIConfig } from '../../src/utils';

const getCurrentTheme = () => {
  const brand = getAPIConfig().brandId;
  const { assetHostTCP } = getAPIConfig();

  switch (brand) {
    case 'tcp':
      return { ...themeTCP, assetHostTCP };

    case 'gym':
      return { ...themeGymboree, assetHostTCP };

    case 'snj':
      return { ...themeSNJ, assetHostTCP };

    case 'pjp':
      return { ...themePJP, assetHostTCP };

    default:
      return { ...themeTCP, assetHostTCP };
  }
};

export default getCurrentTheme;
