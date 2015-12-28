import babel from 'rollup-plugin-babel';
import npm from 'rollup-plugin-npm';

export default {
  entry: 'index.js',
  dest: 'dest/bundle.rollup.js',
  format: 'umd',
  plugins: [
    babel(),
    npm({
      jsnext: true,
    })
  ]
};