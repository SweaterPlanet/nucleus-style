import commonjs from '@rollup/plugin-commonjs'
import pde from 'rollup-plugin-peer-deps-external'
import filesize from 'rollup-plugin-filesize'
import resolve from '@rollup/plugin-node-resolve'

import pkg from './package.json'

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
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    pde(),
    resolve({
      extensions: ['.js', '.jsx'],
      resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/, /^(?!styled-components)/],
    }),
    commonjs(),
    filesize(),
  ],
}
