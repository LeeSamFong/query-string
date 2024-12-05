import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'test.js', // 入口文件路径
	output: {
		file: 'dist/bundle.js', // 输出文件路径
		format: 'es' // 输出格式，ES 模块格式支持 Tree-shaking
	},
	plugins: [
		resolve(),
		commonjs()
	]
};
