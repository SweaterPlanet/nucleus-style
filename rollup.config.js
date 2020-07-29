import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import pde from 'rollup-plugin-peer-deps-external'
import filesize from 'rollup-plugin-filesize'
import resolve from '@rollup/plugin-node-resolve'

import pkg from './package.json'

const extensions = ['.js', '.jsx']

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    },
    {
      file: pkg.module,
      format: 'es',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'nucleus-style',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    pde(),
    resolve({
      extensions,
      resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/, /^(?!styled-components)/],
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: './node_modules/**',
      extensions,
      presets: ['@babel/preset-react'],
    }),
    commonjs(),
    filesize(),
  ],
}
