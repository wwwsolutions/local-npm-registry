module.exports = {
  displayName: 'verdaccio-v4-reverse-proxy',

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
  coverageDirectory: '../../../../coverage/libs/verdaccio/v4/reverse-proxy',
  preset: '../../../../jest.preset.ts',
};
