module.exports = function(config) {
	config.set({
		frameworks: ["mocha", "chai", "karma-typescript"],
		files: ["test/common/**/*.ts", "src/**/*.ts", "test/browser/**/*.ts"],
		preprocessors: {
			"**/*.ts": ["karma-typescript"],
		},
		karmaTypescriptConfig: {
			tsconfig: "./test/tsconfig-es.json",
		},
		browsers: ["ChromeHeadless"],
	});
};
