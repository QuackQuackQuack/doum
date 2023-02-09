import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'Doum',
    brandImage: './doum.svg',
    fontBase: '"Manrope", sans-serif',
  }
});