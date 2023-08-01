// import babel from '@rollup/plugin-babel';
// import eslint from 'rollup-plugin-eslint';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import replace from '@rollup/plugin-replace';
// import sucrase from '@rollup/plugin-sucrase'

// export default {
//    input: 'src/main.jsx',
//    output: {
//       file: 'bundle.js',
//       format: 'iife',
//       interop: 'auto'
//    },
//   entry: 'src/main.jsx',
//   dest: 'build/js/main.min.js',
//   format: 'iife',
//   sourceMap: 'inline',
//   plugins: [
//       sucrase({
//       exclude: ['node_modules/**'],
//       transforms: ['typescript', 'jsx']
//       }),
//     resolve({
//       jsnext: true,
//       main: true,
//       browser: true,
//     }),
//     commonjs(),
//     babel({
//       exclude: 'node_modules/**',
//     }),
//     replace({
//       ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
//     }),
//     process.env.NODE_ENV === 'production' && uglify(),
//   ],
// };