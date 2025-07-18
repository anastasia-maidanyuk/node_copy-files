'use strict';

const fs = require('fs');

const [, , sourcePath, destinationPath] = process.argv;

if (sourcePath === destinationPath) {
  process.exit(0);
}

try {
  fs.copyFileSync(sourcePath, destinationPath);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error('copy error', error.message);
}
