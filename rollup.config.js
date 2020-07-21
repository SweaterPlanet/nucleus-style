import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'

import pkg from './package.json'

const PLUGINS = [
  resolve({
    extensions: ['.js', '.jsx'],
    resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/, /^(?!styled-components)/],
  }),
  commonjs(),
  filesize(),
]

const OUTPUT = [
  {
    file: pkg.browser,
    format: 'umd',
  },
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
]

const config = OUTPUT.map(({ file, format }) => ({
  input: 'src/index.js',
  output: {
    dir: './dist',
    file,
    format,
    name: 'nucleus-style',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'styled-components': 'styled',
    },
  },
  external: ['react', 'react-dom', 'styled-components'],
  plugins: PLUGINS,
}))

export default config
