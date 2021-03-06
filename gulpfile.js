var gulp = require('gulp');
var minimist = require('minimist');

var flagConfig = {
  string: ['port', 'version', 'ngVersion', 'animations'],
  boolean: ['dry-run'],
  alias: {'p': 'port', 'v': 'version', 'a': 'ngVersion'},
  default: { port: 8000 }
};
var flags = minimist(process.argv.slice(2), flagConfig);

/* Docs tasks */
require('./scripts/docs/gulp-tasks')(gulp, flags);
