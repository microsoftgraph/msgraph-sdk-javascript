module.exports = function(config) {
	config.set({
		frameworks: ["mocha", "chai", "karma-typescript"],
		files: ["test/common/**/*.ts","src/**/!(azureTokenCredentials)/*.ts", "src/*.ts", "test/browser/**/*.ts", "test/*.ts"],
		preprocessors: {
			"**/*.ts": ["karma-typescript"],
		},
		karmaTypescriptConfig: {
			tsconfig: "./tsconfig-cjs.json",
		},
		browsers: ["ChromeHeadless"]
	});
};
