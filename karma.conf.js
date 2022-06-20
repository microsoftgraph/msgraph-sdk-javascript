module.exports = function(config) {
	config.set({
		frameworks: ["mocha", "chai", "karma-typescript"],
		files: ["src/**/*.ts", "spec/!(development)/*.ts", "spec/*.ts", "spec/core/browser/**.ts"],
		preprocessors: {
			"**/*.ts": ["karma-typescript"],
		},
		karmaTypescriptConfig: {
			tsconfig: "./tsconfig-cjs.json",
		},
		browsers: ["ChromeHeadless"],
	});
};
