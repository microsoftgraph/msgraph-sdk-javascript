/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { WorkbookRange, WorkbookWorksheet } from "@microsoft/microsoft-graph-types";
import { assert } from "chai";
import * as fs from "fs";

import { getClient, randomString } from "../test-helper";

const client = getClient();

const ExcelFilename = `empty-spreadsheet-${randomString()}.xlsx`;

describe("Excel", function() {
	this.timeout(10 * 1000);
	beforeEach((done) => {
		setTimeout(() => {
			done();
		}, 1000);
	});
	it("Uploads an Excel file to OneDrive", async () => {
		try {
			const file = fs.readFileSync("./test/sample_files/empty-spreadsheet.xlsx");
			const res = await client.api(`/me/drive/root/children/${ExcelFilename}/content`).put(file);
			assert.isDefined(res.id);
		} catch (error) {
			throw error;
		}
	});

	it("Lists the worksheets in an excel file", async () => {
		try {
			const res = await client.api(`/me/drive/root:/${ExcelFilename}:/workbook/worksheets`).get();
			const worksheets = res.value as WorkbookWorksheet[];
			const sheet1 = worksheets[0];
			assert.isNumber(sheet1.position);
			assert.isString(sheet1.visibility);
			assert.isString(sheet1.id);
			assert.isUndefined(sheet1["random fake property that should be null"]);
		} catch (error) {
			throw error;
		}
	});

	it("Updates workbook worksheet range", async () => {
		const sampleData: WorkbookRange = {
			values: [
				["cell a1", "cell a2"],
				["cell b1", "cell b2"],
			],
		};
		try {
			const response = await client.api(`/me/drive/root:/${ExcelFilename}:/workbook/worksheets/Sheet1/range(address='A1:B2')`).patch(sampleData);
			assert.isDefined(response["@odata.id"]);
			assert.isDefined(response.values);
		} catch (error) {
			throw error;
		}
	});

	it("GETs the used range of the worksheet", async () => {
		try {
			const res: WorkbookRange = await client.api(`/me/drive/root:/${ExcelFilename}:/workbook/worksheets/Sheet1/range/usedrange`).get();
			assert.isNumber(res.cellCount);
			assert.isString(res.address);
			assert.isUndefined(res["random fake property that should be null"]);
		} catch (error) {
			throw error;
		}
	});
});
