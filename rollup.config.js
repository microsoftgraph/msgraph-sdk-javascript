import { terser } from "rollup-plugin-terser";

const config = [
	{
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
