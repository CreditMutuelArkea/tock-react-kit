import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript';

export default {
  input: 'src/index.ts',
  external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
  output: [
    {
      file: 'build/tock-react-kit.umd.js',
      format: 'umd',
      name: 'TockReact',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        '@emotion/styled': 'emotionStyled',
        '@emotion/react': 'emotionReact',
      },
    },
    {
      file: 'build/tock-react-kit.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
