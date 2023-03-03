const Configuration = {
  extends: ['lerna', '@commitlint/config-conventional'],
  ignores: [(commit) => commit === ''],
};

module.exports = Configuration;