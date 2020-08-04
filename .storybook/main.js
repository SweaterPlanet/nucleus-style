module.exports = {
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  stories: ['../src/components/**/*.stories.(jsx|mdx)'],
}
