/** @type { import('@storybook/react').Preview } */
import { themes } from '@storybook/theming'

const preview = {
  parameters: {
    docs: {
      themes: themes.dark
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
