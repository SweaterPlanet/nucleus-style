import { addParameters } from '@storybook/client-api'

// Screen widths based on breakpoints defined in theme
const breakpoints = {
  xs: {
    name: 'XS',
    styles: {
      width: '300px',
      height: '800px',
    },
  },
  sm: {
    name: 'SM',
    styles: {
      width: '576px',
      height: '800px',
    },
  },
  md: {
    name: 'MD',
    styles: {
      width: '768px',
      height: '800px',
    },
  },
  lg: {
    name: 'LG',
    styles: {
      width: '992px',
      height: '800px',
    },
  },
  xl: {
    name: 'XL',
    styles: {
      width: '1200px',
      height: '800px',
    },
  },
}

addParameters({
  viewport: { viewports: breakpoints },
})
