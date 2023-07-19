import json from '@rollup/plugin-json';

export default {
	input: './src/index.js',
	output: {
		
		file: './build/bundle.js',
		format: 'cjs'
	},
	plugins: [json()],
  watch: {
    exclude: 'node_modules/**'
  }
};