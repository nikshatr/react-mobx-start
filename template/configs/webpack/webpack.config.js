const merge = require('webpack-merge')
const entry = require('./entry')
const modules = require('./modules')
const options = require('./options')
const output = require('./output')
const plugins = require('./plugins')
const resolve = require('./resolve')
const server = require('./server')

const config = merge(
	options(),
	entry(),
	output(),
	server(),
	resolve(),
	modules(),
	plugins()
)

module.exports = config