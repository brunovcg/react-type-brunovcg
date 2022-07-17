module.exports = {
  '*.{ts,tsx}': (filename) => ['npm run format:fix', 'npm run validate']
}
