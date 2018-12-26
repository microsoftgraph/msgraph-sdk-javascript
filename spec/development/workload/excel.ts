/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import * as fs from 'fs';
import { getClient, randomString } from "../test-helper";
import { WorkbookWorksheet, WorkbookRange } from '@microsoft/microsoft-graph-types';

const client = getClient();

const ExcelFilename = `empty-spreadsheet-${randomString()}.xlsx`;

describe('Excel', function () {
    this.timeout(10 * 1000);
    beforeEach((done) => {
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('Uploads an Excel file to OneDrive', async () => {
        try {
            let file = fs.readFileSync('./spec/sample_files/empty-spreadsheet.xlsx');
            let res = await client.api(`/me/drive/root/children/${ExcelFilename}/content`).put(file);
            assert.isDefined(res.id);
        } catch (error) {
            throw error;
        }
    });

    it('Lists the worksheets in an excel file', async () => {
        try {
            let res = await client.api(`/me/drive/root:/${ExcelFilename}:/workbook/worksheets`).get();
            let worksheets = res.value as WorkbookWorksheet[];
            let sheet1 = worksheets[0];
            assert.isNumber(sheet1.position);
            assert.isString(sheet1.visibility);
            assert.isString(sheet1.id);
            assert.isUndefined(sheet1['random fake property that should be null']);
        } catch (error) {
            throw error;
        }
    })

    it('Updates workbook worksheet range', async () => {
        let sampleData: WorkbookRange = {
            values: [
                ['cell a1', 'cell a2'],
                ['cell b1', 'cell b2']
            ]
        };
        try {
            let response = await client.api(`/me/drive/root:/${ExcelFilename}:/workbook/worksheets/Sheet1/range(address='A1:B2')`).patch(sampleData);
            assert.isDefined(response["@odata.id"]);
            assert.isDefined(response.values);
        } catch (error) {
            throw error;
        }
    })

    it('GETs the used range of the worksheet', async () => {
        try {
            let res: WorkbookRange = await client.api(`/me/drive/root:/${ExcelFilename}:/workbook/worksheets/Sheet1/range/usedrange`).get();
            assert.isNumber(res.cellCount);
            assert.isString(res.address);
            assert.isUndefined(res['other prop']);
        } catch (error) {
            throw error;
        }
    })
});
