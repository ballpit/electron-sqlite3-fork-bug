const childProcess = require('child_process')

const path = require('path')

// Works
require('./cp.js')
  // Works
setTimeout(() => {
  var cp = childProcess.spawn(path.join(__dirname, 'node_modules', '.bin', 'electron'), ['cp.js'], {silent: true})
  cp.stdout.on('data', buf => console.log(buf.toString()))
  cp.stderr.on('data', buf => console.error(buf.toString()))
}, 1000)
  // Blows up
setTimeout(() => {
  var cp = childProcess.fork('./cp.js', {silent: true})
  cp.stdout.on('data', buf => console.log(buf.toString()))
  cp.stderr.on('data', buf => console.error(buf.toString()))
}, 2000)
