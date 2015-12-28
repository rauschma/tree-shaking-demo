import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',
  dest: 'bundle.js',
  format: 'umd',
  plugins: [
    babel()
  ]
};