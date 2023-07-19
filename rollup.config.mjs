import json from "@rollup/plugin-json";
import styles from "rollup-plugin-styles";
import image from '@rollup/plugin-image';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'



export default {
	input: "./src/index.js",
	output: {
		
		file: "./build/bundle.js",
		format: "cjs"
	},
	plugins: [
		json(),
		styles(),
		image(),
		babel({ 
			babelHelpers: 'bundled',
			presets: ["@babel/env"] 
		}),
		serve({
			open: true,
			contentBase: './',
			port: 8000,
		}),
		livereload()
	],
  watch: {
    exclude: "node_modules/**"
  }
};