'use strict';

angular.module('icestudio')
  .factory('nodeFs', function() {
    return require('fs');
  })
  .factory('nodeFse', function() {
    return require('fs-extra');
  })
  .factory('nodeRmdir', function() {
    return require('rmdir');
  })
  .factory('nodeSha1', function() {
    return require('sha1');
  })
  .factory('nodePath', function() {
    return require('path');
  })
  .factory('nodeChildProcess', function() {
    return require('child_process');
  })
  .factory('nodeTarball', function() {
    return require('tarball-extract');
  })
  .factory('nodeZlib', function() {
    return require('zlib');
  })
  .factory('nodeSSHexec', function() {
    return require('ssh-exec');
  })
  .factory('nodeRSync', function() {
    return require('rsyncwrapper');
  })
  .factory('nodeSudo', function() {
    return require('sudo-prompt');
  })
  .factory('nodeOnline', function() {
    return require('is-online');
  })
  .factory('nodeGlob', function() {
    return require('glob');
  })
  .factory('nodeLangInfo', function() {
    return require('node-lang-info');
  })
  .factory('nodeAdmZip', function() {
    return require('adm-zip');
  })
  .factory('nodeGettext', function() {
    return require('angular-gettext-tools');
  })
  .factory('nodeCP', function() {
    return require('copy-paste');
  })
  .factory('nodeGetOS', function() {
    return require('getos');
  })
  .factory('SVGO', function() {
    var config = {
      full: true,
      plugins: [
        'removeDoctype',
        'removeXMLProcInst',
        'removeComments',
        'removeMetadata',
        'removeXMLNS',
        'removeEditorsNSData',
        'cleanupAttrs',
        'minifyStyles',
        'convertStyleToAttrs',
        'cleanupIDs',
        'removeRasterImages',
        'removeUselessDefs',
        'cleanupNumericValues',
        'cleanupListOfValues',
        'convertColors',
        'removeUnknownsAndDefaults',
        'removeNonInheritableGroupAttrs',
        'removeUselessStrokeAndFill',
        'removeViewBox',
        'cleanupEnableBackground',
        'removeHiddenElems',
        'removeEmptyText',
        'convertShapeToPath',
        'moveElemsAttrsToGroup',
        'moveGroupAttrsToElems',
        'collapseGroups',
        'convertPathData',
        'convertTransform',
        'removeEmptyAttrs',
        'removeEmptyContainers',
        'mergePaths',
        'removeUnusedNS',
        'transformsWithOnePath',
        'sortAttrs',
        'removeTitle',
        'removeDesc',
        'removeDimensions',
        'removeAttrs',
        'removeElementsByAttr',
        'addClassesToSVGElement',
        'removeStyleElement',
        'removeStyleElement'
      ]
    };
    var SVGO = require('svgo');
    return new SVGO(config);
  });
