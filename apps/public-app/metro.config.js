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

// // 3. FORCE SINGLETONS (The Critical Fix)
// // This ensures 'react' and 'react-native' always resolve to the workspace root.
// config.resolver.extraNodeModules = {
//   'react': path.resolve(workspaceRoot, 'node_modules/react'),
//   'react-native': path.resolve(workspaceRoot, 'node_modules/react-native'),
//   'expo': path.resolve(workspaceRoot, 'node_modules/expo'),
//   // Explicitly link your UI package if auto-resolution fails
// //   '@app/ui': path.resolve(workspaceRoot, 'packages/ui'),
// };

module.exports = config;