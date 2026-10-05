module.exports = {
  default: {
    requireModule: ['tsx/cjs'],
    require: ['features/support/**/*.ts', 'features/step-definitions/**/*.ts'],
    format: ['progress'],
  },
}