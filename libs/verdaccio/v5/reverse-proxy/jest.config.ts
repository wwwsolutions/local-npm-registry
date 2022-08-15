/* eslint-disable */
export default {
  displayName: 'verdaccio-v5-reverse-proxy',

  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/verdaccio/v5/reverse-proxy',
  preset: '../../../../jest.preset.js',
};
