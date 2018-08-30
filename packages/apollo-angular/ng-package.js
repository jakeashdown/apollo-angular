const {umdModuleIds} = require('../../ng-package');

module.exports = {
  dest: 'build',
  lib: {
    entryFile: 'src/index.ts',
    flatModuleFile: 'ng.apollo',
    umdModuleIds,
  },
  whitelistedNonPeerDependencies: [
    "semver"
  ]
};
