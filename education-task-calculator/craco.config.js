// const path = require('path');
// // eslint-disable-next-line import/no-extraneous-dependencies
// const cracoAlias = require('craco-alias');

// module.exports = {
//   webpack: {
//     alias: {
//       '@': path.resolve(__dirname, 'src/'),
//       '@components': path.resolve(__dirname, 'src/components'),
//       '@utils': path.resolve(__dirname, 'src/utils'),
//     },
//   },
//   plugins: [
//     {
//       plugin: cracoAlias,
//       options: {
//         baseUrl: './src',
//         source: 'jsconfig',
//       },
//     },
//   ],
// };
const path = require('path');
const { whenProd } = require('@craco/craco');

const {
  compilerOptions: { paths },
} = require('./jsconfig.json');

module.exports = {
  eslint: {
    mode: 'file',
  },
  webpack: {
    // Set them your alias in the tsconfig.json
    alias: Object.keys(paths).reduce(
      (all, alias) => ({
        ...all,
        [alias.replace('/*', '')]: path.resolve(
          __dirname,
          'src',
          paths[alias][0].replace('/*', ''),
        ),
      }),
      {},
    ),
  },
};
