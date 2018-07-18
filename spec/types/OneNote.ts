import { assert } from 'chai'

import { getClient, randomString } from "./test-helper"
import { Notebook, OnenoteSection, OnenotePage } from '@microsoft/microsoft-graph-types-beta'
import * as fs from "fs";
import * as FormData from "form-data";

declare const describe, it;

describe('OneNote', function () {
    this.timeout(20 * 1000);
    let notebook: Notebook = {
        displayName: "Sample notebook - " + randomString()
    };

    let section: OnenoteSection = {
        displayName: "Sample section - " + randomString()
    }

    let createdPage: OnenotePage;
    const PageContent = "Sample page content - " + randomString();

    it('Create a OneNote notebook', function () {
        return getClient().api("/me/onenote/notebooks").post(notebook).then((json) => {
            const createdNotebook = json as Notebook;
            assert.isDefined(createdNotebook.id);
            assert.equal(notebook.displayName, createdNotebook.displayName);
            assert.isUndefined(createdNotebook['invalidPropertyName']);

            // if this passes, use this notebook in the following tests
            notebook = createdNotebook;
            return Promise.resolve();
        });
    });

    it('Create a OneNote section in a Notebook', function () {
        return getClient().api(`/me/onenote/notebooks/${notebook.id}/sections`).post(section).then((json) => {
            const createdSection = json as OnenoteSection;
            assert.isDefined(createdSection.id);
            assert.equal(section.displayName, createdSection.displayName);
            assert.isUndefined(createdSection['invalidPropertyName']);

            // if this passes, use this notebook in the following tests
            section = createdSection;
            return Promise.resolve();

        });
    });

    it('Create a OneNote page in a section with basic text content', function () {
        return getClient()
            .api(`/me/onenote/sections/${section.id}/pages`)
            .header("Content-Type", "text/html")
            .post(PageContent)
            .then((json) => {
                createdPage = json as OnenotePage;
                assert.isDefined(createdPage.id);
                assert.isDefined(createdPage.contentUrl);
                assert.isUndefined(createdPage['invalidPropertyName']);

                return Promise.resolve();
            });
    });
    it("Create a OneNote page with html page content", () => {
        let formData = new FormData();
        formData.append('Presentation', fs.createReadStream('./spec/types/onenotepage.html'));
        return getClient()
            .api(`/me/onenote/sections/${section.id}/pages`)
            .post(formData)
            .then((json) => {
                let createdPageFromHTML = json as OnenotePage;
                assert.isDefined(createdPage.id);
                assert.isDefined(createdPage.contentUrl);
                assert.equal("New Page", createdPageFromHTML.title);
                assert.isUndefined(createdPage['invalidPropertyName']);
                return Promise.resolve();
            });
    });

    it("create a OneNote page with html page content and file attachment", () => {
        let formData = new FormData();
        formData.append('Presentation', fs.createReadStream('./spec/types/onenotepage_fileattachment.html'));
        formData.append("fileBlock1", fs.createReadStream("./sample.png"));
        return getClient()
            .api(`/me/onenote/sections/${section.id}/pages`)
            .post(formData)
            .then((json) => {
                let createdPageFromHTML = json as OnenotePage;
                assert.isDefined(createdPage.id);
                assert.isDefined(createdPage.contentUrl);
                assert.equal("A page with rendered file attachment", createdPageFromHTML.title);
                assert.isUndefined(createdPage['invalidPropertyName']);
                return Promise.resolve();
            });
    });
});
