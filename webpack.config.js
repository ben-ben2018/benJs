const path = require("path");
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function getfiles(path) {
	return fs.readdirSync(path, {
		encoding: 'utf8',
		withFileTypes: true
	})
}

const mpaConfig = () => {
	const entry = {};
	const htmlPlugin = [];
	getfiles(path.join(__dirname, '/src/pages/')).forEach(dir => {
		const pageName = dir.name;
		const pagePath = `/src/pages/${pageName}/${pageName}`
		entry[pageName] = path.join(__dirname, pagePath + `.js`);
		htmlPlugin.push(
			new HtmlWebpackPlugin({
				inject: true,
				caseSensitive: true,
				filename: pageName + '.html',
				template: path.join(__dirname, pagePath + `.html`),
				chunks: ["main", pageName],
				minify: {
					caseSensitive: true,
					keepClosingSlash: true
				}
			}),
		)
	});
	return { entry, htmlPlugin }
}
const { entry, htmlPlugin } = mpaConfig()
entry['main'] = path.join(__dirname, `main.js`)
module.exports = {
	entry,
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},
	module: {
		rules: [{
			test: /\.css$/,

			use: ["style-loader", {
				loader: MiniCssExtractPlugin.loader,
				options: {
					esModule: false
				}
			}, "css-loader", 'postcss-loader'],
		},
		{
			test: /\.styl$/,
			use: ["style-loader", "css-loader", "stylus-loader", 'postcss-loader'],
		},
		{
			//处理图片文件
			test: /\.(png|jpe?g|gif|webp|svg)$/,
			type: "asset",
			parser: {
				dataUrlCondition: {
					maxSize: 100 * 1024
				}
			},
			generator: {
				filename: 'img/[name]_[hash:6][ext]'
			}
		}, {
			test: /\.html$/i,
			use: ["html-loader", path.resolve(__dirname, './ben/loader/astToHtml-loader'), path.resolve(__dirname, './ben/loader/html-loader')],
		}, {
			test: /\.htm$/i,
			use: ["html-loader", path.resolve(__dirname, './ben/loader/component-loader')],
		}, {
			test: /\.js$/,
			use: {
				loader: "babel-loader",
				options: {
					presets: [
						"@babel/preset-env"
					]
				}
			}
		}],
	},
	plugins: [...htmlPlugin,
	new MiniCssExtractPlugin(),
	new CompressionWebpackPlugin({
		filename: '[path]_[base].gz[query]',
		algorithm: 'gzip',
		test: new RegExp('\.(js|css)$'),
		threshold: 1024,
		minRatio: 0.8
	}),
	],
	mode: 'production',
	optimization: {
		minimizer: [new UglifyJsPlugin({
			test: /\.js(\?.*)?$/i,
		})],
	},
	performance: {
		hints: 'warning',
		maxEntrypointSize: 50000000,
		maxAssetSize: 30000000,
		assetFilter: function (assetFilename) {
			return assetFilename.endsWith('.js');
		}
	},
};