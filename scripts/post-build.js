const shell = require('shelljs');
const path = require('path');

// copy errors.js and errors.d.ts to the build output dir
shell.cd(path.join(__dirname, '..'));
shell.cp('src/errors.*', 'lib/');
