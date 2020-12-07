require("isomorphic-fetch");
module.exports = function(config) {
	config.set({
		frameworks: ["mocha", "chai", "karma-typescript"],
		files: ["spec/**/*.ts", "src/**/*.ts"],
		preprocessors: {
			"**/*.ts": ["karma-typescript"], // *.tsx for React Jsx
		},
		karmaTypescriptConfig: {
			tsconfig: "tsconfig.json",
		},
	});
};
