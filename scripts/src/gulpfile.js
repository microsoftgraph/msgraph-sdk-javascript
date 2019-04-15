const { src, dest, series } = require("gulp");
const replace = require("gulp-replace");
const jsonModify = require("gulp-json-modify");
const argv = require("yargs").argv;

function ReplaceVersionInJson() {
	const versionKey = "version";
	return src(["../../package.json", "../../package-lock.json"])
		.pipe(
			jsonModify({
				key: versionKey,
				value: argv.newVersion,
			}),
		)
		.pipe(dest("../../"));
}

function ReplaceVersionInConstants() {
	return src(["../../src/Constants.ts"])
		.pipe(replace(/PACKAGE_VERSION ?= ?".*?"/g, `PACKAGE_VERSION = "${argv.newVersion}"`))
		.pipe(dest("../../src"));
}

exports.ReplaceVersion = series(ReplaceVersionInJson, ReplaceVersionInConstants);
