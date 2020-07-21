import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'

const formats = ['cjs', 'esm', 'umd']

const plugins = [
  resolve({
    extensions: ['.js', '.jsx'],
    resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/, /^(?!styled-components)/],
  }),
  commonjs(),
  filesize(),
]

export default [
  {
    input: 'src/index.js',
    external: ['react', 'react-dom', 'styled-components'],
    output: formats.map(format => ({
      file: `./dist/index.${format}.js`,
      format,
      sourcemap: true,
      name: 'nucleus-style',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    })),
    plugins,
  },
]
