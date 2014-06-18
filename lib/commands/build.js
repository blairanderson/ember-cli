'use strict';

var path    = require('path');
var Command = require('../models/command');

module.exports = Command.extend({
  name: 'build',
  description: 'Builds your app and places it into the output path (dist/ by default).',

  availableOptions: [
    { name: 'environment', type: String, default: 'development' },
    { name: 'output-path', type: path, default: 'dist/' }
  ],

  run: function(commandOptions) {
    var BuildTask = this.tasks.Build;
    var buildTask = new BuildTask({
      ui: this.ui,
      analytics: this.analytics
    });
    return buildTask.run(commandOptions);
  }
});