'use strict'

const IGNORE = "empty:"
const CDN_URL = ''
const CDN_REQ_TEXT = IGNORE

module.exports = {
  "requirejs": {    
    "optimize_options": ["none", "uglify"],
    "file_suffix_map": { "none": "", "uglify": "min" },
    "result_key_order": ['name', 'src', 'results', 'files', 'paths', 'shim'],
    "options": {
      "enabled": true,
      "baseUrl": "js",
      "name": "main",
      "out": "public/js/scripts.js",
      "optimize": "none",
      "paths": {
        "text": CDN_REQ_TEXT,
        "jquery": IGNORE,
        "underscore": IGNORE,
        "moment": IGNORE,
        "backbone": IGNORE,
        "ba": IGNORE,
        "jqueryactual": IGNORE,
        "jqappear": IGNORE,
        "jquerycookie": IGNORE,
        "jqueryui": IGNORE,
        "jquery.ui.widget": IGNORE,
        "jqueryiframetransport": IGNORE,
        "jqueryfileupload": IGNORE,
        "ace": IGNORE,
        "iscroll": IGNORE,
        "spin": IGNORE,
        "sio": IGNORE,
        "spectrum": IGNORE,
        "twemoji": IGNORE,
        "fblib": IGNORE
      },
      "shim": {
        "jquery": { "exports": "$" },
        "underscore": { "exports": "_" },
        "lodash": { "exports": "_" },
        "backbone": { "exports": "Backbone", "deps": ["underscore", "jquery"] },
        "ba": { "deps": ["underscore", "backbone"] },
        "jqueryui": { "deps": ["jquery"] },
        "jquerycookie": { "deps": ["jquery"] },
        "jqueryactual": { "deps": ["jquery"] },
        "jqappear": { "deps": ["jquery"] },
        "jqhashchange": { "deps": ["jquery"] },
        "jqeasytabs": { "deps": ["jquery", "jqhashchange"] },
        "jqueryiframetransport": { "deps": ["jquery"] },
        "jqueryfileupload": { "deps": ["jquery", "jqueryiframetransport"] },
        "ace": { "exports": "ace" },
        "spectrum": { "deps": ["jquery"] },
        "twemoji": { "exports": "twemoji" }
      }
    },
    "client_paths": {
      "text": CDN_URL + "/js/require/text.min",
      "jquery": CDN_URL + "/js/jquery/jquery.slim.min",
      "underscore": CDN_URL + "/js/lodash/lodash.slim.min",
      "moment": CDN_URL + "/js/moment/moment.min",
      "backbone": CDN_URL + "/js/backbone/backbone.min",
      "ba": CDN_URL + "/js/backbone/ba.min",

      "jqueryactual": CDN_URL + "/jquery.actual.min",
      "jqappear": CDN_URL + "/jquery.appear.min",
      "jquerycookie": CDN_URL + "/jquery.cookie.min",
      "jqueryui": CDN_URL + "/jquery.ui.min",
      "jquery.ui.widget": CDN_URL + "/jquery.ui.widget.min",
      "jqueryiframetransport": CDN_URL + "/jquery.iframe-transport.min",
      "jqueryfileupload": CDN_URL + "/jquery.fileupload.min",

      "ace": CDN_URL + "/ace",
      "iscroll": CDN_URL + "/iscroll.min",
      "spin": CDN_URL + "/spin.min",
      "sio": CDN_URL + "/sio.min",
      "spectrum": CDN_URL + "/spectrum.min",
      "twemoji": CDN_URL + "/twemoji.min",
      "fblib": "//connect.facebook.net/en_US/all",

      "mans": CDN_URL + "/snapp/mans",
      "models": CDN_URL + "/snapp/models",
      "node": CDN_URL + "/snapp/node",
      "plat": CDN_URL + "/snapp/plat",
      "rest": CDN_URL + "/snapp/rest",
      "ui": CDN_URL + "/snapp/ui",
      "mixins": CDN_URL + "/snapp/mixins"
    }
  }
}