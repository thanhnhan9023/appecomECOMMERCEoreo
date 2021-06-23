module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  plugins: [
      'babel',
      'react',
      'react-native',
      'prettier',
      'import',
      // 'react-hooks',
  ],

  globals: {
      myGlobal: false,
  },

  rules: {
      'react-native/no-inline-styles': 0,
      'generator-star-spacing': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'no-unused-vars': 'off',
      eqeqeq: 'off',
      yoda: 'off',
      'no-shadow': 'off',
      radix: 'off',
      printWidth: 200,
  },
};
