import { assert } from "chai";
import { getClient, randomString } from "../test-helper";
import * as LargeFileUploadUtil from "../../lib/src/LargeFileUploadUtil";


declare const describe, it;

describe("getValidRangeSize", () => {
    it("Size not a multiple of 320KB", (done) => {
        assert.equal(327680, LargeFileUploadUtil.getValidRangeSize(327685));
        done();
    });
    it("Size less than 320 KB", (done) => {
        assert.equal(100, LargeFileUploadUtil.getValidRangeSize(100));
        done();
    });
    it("Size more than 60 MB", (done) => {
        assert.equal(62914560, LargeFileUploadUtil.getValidRangeSize(104857600));
        done();
    });
    it("Size is a multiple of 320 KB", (done) => {
        assert.equal(1638400, LargeFileUploadUtil.getValidRangeSize(1638400));
        done();
    })
});