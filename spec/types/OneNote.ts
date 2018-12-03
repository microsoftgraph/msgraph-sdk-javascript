/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { assert } from "chai";
import * as FormData from "form-data";
import * as fs from "fs";
import { getClient, randomString } from "../test-helper";
import { Notebook, OnenoteSection, OnenotePage } from '@microsoft/microsoft-graph-types';

const client = getClient();

describe('OneNote', function () {
    this.timeout(20 * 1000);
    let notebook = <Notebook>{
        displayName: "Sample notebook - " + randomString()
    };

    let section = <OnenoteSection>{
        displayName: "Sample section - " + randomString()
    }

    let createdPage: OnenotePage;
    const PageContent = "Sample page content - " + randomString();

    it('Create a OneNote notebook', async () => {
        try {
            let json = await client.api("/me/onenote/notebooks").post(notebook);
            const createdNotebook = json as Notebook;
            assert.isDefined(createdNotebook.id);
            assert.equal(notebook.displayName, createdNotebook.displayName);
            assert.isUndefined(createdNotebook['invalidPropertyName']);

            // if this passes, use this notebook in the following tests
            notebook = createdNotebook;
        } catch (error) {
            throw error;
        }
    });

    it('Create a OneNote section in a Notebook', async () => {
        try {
            let json = await client.api(`/me/onenote/notebooks/${notebook.id}/sections`).post(section);
            const createdSection = json as OnenoteSection;
            assert.isDefined(createdSection.id);
            assert.equal(section.displayName, createdSection.displayName);
            assert.isUndefined(createdSection["invalidPropertyName"]);

            // if this passes, use this notebook in the following tests
            section = createdSection;
        } catch (error) {
            throw error;
        }
    });

    it('Create a OneNote page in a section with basic text content', async () => {
        try {
            let json = await client
                .api(`/me/onenote/sections/${section.id}/pages`)
                .header("Content-Type", "text/html")
                .post(PageContent);
            createdPage = json as OnenotePage;
            assert.isDefined(createdPage.id);
            assert.isDefined(createdPage.contentUrl);
            assert.isUndefined(createdPage['invalidPropertyName']);
        } catch (error) {
            throw error;
        }
    });
    it("Create a OneNote page with html page content", async () => {
        try {
            let formData = new FormData();
            formData.append('Presentation', fs.createReadStream('./spec/sample_files/onenotepage.html'));
            let json = await client
                .api(`/me/onenote/sections/${section.id}/pages`)
                .post(formData);
            let createdPageFromHTML = json as OnenotePage;

            assert.isDefined(createdPage.id);
            assert.isDefined(createdPage.contentUrl);
            assert.equal("New Page", createdPageFromHTML.title);
            assert.isUndefined(createdPage['invalidPropertyName']);
        } catch (error) {
            throw error;
        }
    });

    it("create a OneNote page with html page content and file attachment", async () => {
        try {
            let formData = new FormData();
            formData.append('Presentation', fs.createReadStream('./spec/sample_files/onenotepage_fileattachment.html'));
            formData.append("fileBlock1", fs.createReadStream("./sample.png"));
            let json = await client
                .api(`/me/onenote/sections/${section.id}/pages`)
                .post(formData);
            let createdPageFromHTML = json as OnenotePage;
            assert.isDefined(createdPage.id);
            assert.isDefined(createdPage.contentUrl);
            assert.equal("A page with rendered file attachment", createdPageFromHTML.title);
            assert.isUndefined(createdPage['invalidPropertyName']);
        } catch (error) {
            throw error;
        }
    });
});
