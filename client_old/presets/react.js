import { group, babel } from 'webpack-blocks'


export default function(config) {
  return group([
    babel({
      // ideally we only need set modules:false for env here, but:
      // this is why we need duplicate all config:
      // https://github.com/babel/babel/issues/6607
      // TODO after issue fixing we can use different babelrc env
      babelrc: false,
      compact: false,
      presets: [
        ['env', { 'modules': false }],
        // we use stage-2 for more stability
        'stage-2',
        'react',
      ],

      // FIXME skeleton still based on react, but should be more abstract
      plugins: [
        'react-require',
        // we use core-decorators
        'transform-decorators-legacy',
        // some additonal `export` syntax features
        'babel-plugin-transform-export-extensions',
        // need for react HMR
        // 'extract-hoc/babel',
        'react-hot-loader/babel',
      ],
    }),

  ])
}
