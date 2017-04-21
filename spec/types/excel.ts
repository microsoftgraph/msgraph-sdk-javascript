import { assert } from 'chai'
import * as fs from 'fs';

import { getClient, randomString } from "./test-helper"
import { WorkbookWorksheet, WorkbookRange } from '@microsoft/microsoft-graph-types'

declare const describe, it;

const ExcelFilename = `empty-spreadsheet-${randomString()}.xlsx`;

describe('Excel', function() {
  this.timeout(10*1000);
  it('Uploads an Excel file to OneDrive', function() {

    let file = fs.readFileSync('./spec/types/empty-spreadsheet.xlsx');
    return getClient()
        .api(`/me/drive/root/children/${ExcelFilename}/content`)
        .put(file);
  });

  it('Lists the worksheets in an excel file', function() {
      return getClient()
        .api(`/me/drive/root:/${ExcelFilename}:/workbook/worksheets`)
        .get()
        .then((res) => {
            let worksheets = res.value as WorkbookWorksheet[];
            let sheet1 = worksheets[0];
            assert.isNumber(sheet1.position);
            assert.isString(sheet1.visibility);
            assert.isString(sheet1.id);
            assert.isUndefined(sheet1['random fake property that should be null']);
            return Promise.resolve();
        })
  })

  it('Updates workbook worksheet range', function() {
      let sampleData:WorkbookRange = {
          values: [
            ['cell a1', 'cell a2'],
            ['cell b1', 'cell b2']
        ]
      };
      return getClient()
          .api(`/me/drive/root:/${ExcelFilename}:/workbook/worksheets/Sheet1/range(address='A1:B2')`)
          .patch(sampleData)
  })

  it('GETs the used range of the worksheet', function() {
      return getClient()
        .api(`/me/drive/root:/${ExcelFilename}:/workbook/worksheets/Sheet1/range/usedrange`)
        .get()
        .then((res:WorkbookRange) => {
            assert.isNumber(res.cellCount);
            assert.isString(res.address);
            assert.isUndefined(res['other prop'])
        })
  })
});