const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// 1. Watch the whole workspace (so it sees packages/ui)
config.watchFolders = [workspaceRoot, ...config.watchFolders];

// 2. Resolve modules from local (if present) and workspace root (hoisted)
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// 3. Configure path aliases for @app/ui/ and @app/core/ to resolve to their respective src directories
config.resolver.extraNodeModules = {
  '@app/ui': path.resolve(workspaceRoot, 'packages/ui/src'),
  '@app/core': path.resolve(workspaceRoot, 'packages/core/src'),
};

module.exports = config;