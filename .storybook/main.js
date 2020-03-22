module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions/register',
    '@storybook/addon-links',
     {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    }
  ],
};
