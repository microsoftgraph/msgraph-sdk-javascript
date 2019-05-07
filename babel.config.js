module.exports = function(api) {
	api.cache(true);
	const presets = [
		[
			"@babel/preset-env",
			{
				targets: {
					ie: 11,
				},
			},
		],
	];

	const plugins = [
		[
			"@babel/plugin-transform-runtime",
			{
				absoluteRuntime: false,
				corejs: false,
				helpers: true,
				regenerator: true,
				useESModules: false,
			},
		],
	];
	return {
		presets,
		plugins,
	};
};
