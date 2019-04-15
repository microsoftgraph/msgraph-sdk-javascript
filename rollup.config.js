import { terser } from "rollup-plugin-terser";

const config = [
	{
		external: ["es6-promise", "isomorphic-fetch"],
		input: ["lib/es/browser/index.js"],
		output: {
			file: "lib/graph-es-sdk.js",
			format: "es",
			name: "MicrosoftGraph",
		},
		plugins: [terser()],
	},
];

export default config;
