/**
 * RequireJS Build
 * App Rjs (RequireJS, r.js optimizer) Task
 * builds/optimizes js (based on require/AMD)
 */
'use strict'

const _ = require('ninjs-lodash')
const requirejs = require('requirejs')

_.$load(_.path.join(__dirname, '.ninjs', 'settings.js'))
_.$load(_.path.join(__dirname, '.ninjs', 'settings.json'))

const OPTIMIZE_VALS = _.$('requirejs.optimize_options')
const OPTIMIZE_MAP = _.$('requirejs.file_suffix_map')
const RESULT_KEY_ORDER = _.$('requirejs.result_key_order')
const DEF_OPTIONS = _.$('requirejs.options')

exports = module.exports = {
  render: render,
  renderApp: renderApp
}

// run rjs optimizer
function render(options, callback) {
  let start = _.now()
  let params = _.mcopy(DEF_OPTIONS, options)
  let path = _.get(params, 'out') || ''

  return requirejs.optimize(params, (result) => {
    let files = _.drop(_.compact(result.replace('----------------', '').split('\n')))
    files = _.map(files, (file) => { return _.path.resolve(file) })
    let stat = _.statSync(path)
    let bytes = _.get(stat, 'size') || 0
    _.done({ path: path, files: files, duration: _.nowDiff(start), bytes:bytes, size: _.bytes(bytes) }, callback)
  },
  (err) => { return _.fail(err, callback) })
}

// run rjs optimizer for each optimize options
// scripts.js -> non-optimized build useful for debugging build output
// scripts.min.js -> uglify build
function renderApp(options, callback) {
  let { baseUrl, out } = options
  if(!baseUrl) return _.fail('Invalid baseUrl', callback)
  if(!out) return _.fail('Invalid out', callback)

  let start = _.now()
  let ex = _.path.ex(out)
  let dir = ex ? _.path.dir(out) : dir
  let name = ex ? _.path.name(out) : 'scripts'

  let res = { baseUrl: baseUrl, out: out, duration: 0, bytes: 0, size: '', files: [], results: {} }

  let tasks = _.reduce(OPTIMIZE_VALS, (result, v) => {
    let mapped = _.get(OPTIMIZE_MAP, v) || ''
    let optimizeVal = mapped ? `${name}.${mapped}.js` : `${name}.js`
    result[v] = _.async.apply(render, _.mcopy(options, { optimize: v, out: _.path.join(dir, optimizeVal) }))
    res.results[v] = { path: "", duration: 0, bytes: 0, size: "" }
    return result
  }, {})

  return _.async.parallel(tasks, (err, result) => {
    if(err) return _.fail(err, callback)

    _.each(OPTIMIZE_VALS, (v) => {
        let oResult = _.get(result, v)
        res.files = _.get(oResult, 'files') || []
        res.results[v] = _.omit(oResult, ['files'])
    })

    _.each(res.files, (file) => {
      let bytes = _.get(_.statSync(file), 'size') || 0
      res.bytes = res.bytes + bytes
    })

    _.assign(res, { size: _.bytes(res.bytes), duration: _.nowDiff(start) })

    _.done(res, callback)
  })
}