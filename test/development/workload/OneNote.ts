/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { Notebook, OnenotePage, OnenoteSection } from "@microsoft/microsoft-graph-types";
import { assert } from "chai";
import FormData from "form-data";
import fs from "fs";

import { getClient, randomString } from "../test-helper";

const client = getClient();

describe("OneNote", function () {
	this.timeout(20 * 1000);
	let notebook: Notebook = {
		displayName: "Sample notebook - " + randomString(),
	};

	let section: OnenoteSection = {
		displayName: "Sample section - " + randomString(),
	};

	let createdPage: OnenotePage;
	const PageContent = "Sample page content - " + randomString();

	it("Create a OneNote notebook", async () => {
		const json = await client.api("/me/onenote/notebooks").post(notebook);
		const createdNotebook = json as Notebook;
		assert.isDefined(createdNotebook.id);
		assert.equal(notebook.displayName, createdNotebook.displayName);
		assert.isUndefined(createdNotebook["random fake property that should be null"]);
		// if this passes, use this notebook in the following tests
		notebook = createdNotebook;
	});

	it("Create a OneNote section in a Notebook", async () => {
		const json = await client.api(`/me/onenote/notebooks/${notebook.id}/sections`).post(section);
		const createdSection = json as OnenoteSection;
		assert.isDefined(createdSection.id);
		assert.equal(section.displayName, createdSection.displayName);
		assert.isUndefined(createdSection["random fake property that should be null"]);
		// if this passes, use this notebook in the following tests
		section = createdSection;
	});

	it("Create a OneNote page in a section with basic text content", async () => {
		const json = await client.api(`/me/onenote/sections/${section.id}/pages`).header("Content-Type", "text/html").post(PageContent);
		createdPage = json as OnenotePage;
		assert.isDefined(createdPage.id);
		assert.isDefined(createdPage.contentUrl);
		assert.isUndefined(createdPage["random fake property that should be null"]);
	});
	it("Create a OneNote page with html page content", async () => {
		const formData = new FormData();
		formData.append("Presentation", fs.createReadStream("./test/sample_files/onenotepage.html"));
		const json = await client.api(`/me/onenote/sections/${section.id}/pages`).post(formData);
		const createdPageFromHTML = json as OnenotePage;

		assert.isDefined(createdPage.id);
		assert.isDefined(createdPage.contentUrl);
		assert.equal("New Page", createdPageFromHTML.title);
		assert.isUndefined(createdPage["random fake property that should be null"]);
	});

	it("Create a OneNote page with application/xhtml+xml page content", async () => {
		const body = "<!DOCTYPE html><html><head><title>A page with a block of HTML</title></head><body><p>This page contains some <i>formatted</i> <b>text</b>.</p></body></html>";
		const json = await client.api(`/me/onenote/sections/${section.id}/pages`).header("content-type", "application/xhtml+xml").post(body);
		const createdPageFromHTML = json as OnenotePage;
		assert.isDefined(createdPageFromHTML.id);
		assert.isDefined(createdPageFromHTML.contentUrl);
		assert.isUndefined(createdPageFromHTML["random fake property that should be null"]);
	});

	it("create a OneNote page with html page content and file attachment", async () => {
		const formData = new FormData();
		formData.append("Presentation", fs.createReadStream("./test/sample_files/onenotepage_fileattachment.html"));
		formData.append("fileBlock1", fs.createReadStream("./sample.png"));
		const json = await client.api(`/me/onenote/sections/${section.id}/pages`).post(formData);
		const createdPageFromHTML = json as OnenotePage;
		assert.isDefined(createdPage.id);
		assert.isDefined(createdPage.contentUrl);
		assert.equal("A page with rendered file attachment", createdPageFromHTML.title);
		assert.isUndefined(createdPage["random fake property that should be null"]);
	});
});
