import merge from 'webpack-merge'
import entry from './entry'
import modules from './module'
import options from './options'
import output from './output'
import plugins from './plugins'
import resolve from './resolve'
import server from './server'

const config = merge(
	options(),
	entry(),
	output(),
	server(),
	resolve(),
	modules(),
	plugins()
)

export default config