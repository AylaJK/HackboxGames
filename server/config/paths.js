'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  dotenv: resolveApp('.env'),
  appBuild: resolveApp('build'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appEntry: resolveApp('src/server.ts'),
  appNodeModules: resolveApp('node_modules'),
};
