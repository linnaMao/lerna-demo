const Configuration = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit) => commit === ''],
};

module.exports = Configuration;