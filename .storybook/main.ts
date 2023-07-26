module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: '@storybook/react',
    options: {}
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
  staticDirs: ['./public'],
};