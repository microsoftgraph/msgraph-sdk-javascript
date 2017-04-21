import {assert} from 'chai'

import { getClient, randomString } from "./test-helper"
import { Notebook, Section, Page } from '@microsoft/microsoft-graph-types-beta'

declare const describe, it;

describe('OneNote', function() {
  this.timeout(20*1000);
  let notebook:Notebook = {
    name: "Sample notebook - " + randomString()
  };

  let section:Section = {
      name: "Sample section - " + randomString()
  }

  let createdPage:Page;
  const PageContent = "Sample page content - " + randomString();

  const HTMLPageTitle = `Another page ${randomString()}!`
  const HTMLPageContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>${HTMLPageTitle}</title>
    </head>
    <body>
        <p>Created a OneNote page from <b>HTML</b></p>
    </body>
    </html>
  `

  it('Create a OneNote notebook', function() {
    return getClient().api("https://graph.microsoft.com/beta/me/notes/notebooks").post(notebook).then((json) => {
        const createdNotebook = json as Notebook;
        assert.isDefined(createdNotebook.id);
        assert.equal(notebook.name, createdNotebook.name);
        assert.isUndefined(createdNotebook['invalidPropertyName']);

        // if this passes, use this notebook in the following tests
        notebook = createdNotebook;
        return Promise.resolve();
      });
  });

  it('Create a OneNote section in a Notebook', function() {
      return getClient().api(`https://graph.microsoft.com/beta/me/notes/notebooks/${notebook.id}/sections`).post(section).then((json) => {
        const createdSection = json as Section;
        assert.isDefined(createdSection.id);
        assert.equal(section.name, createdSection.name);
        assert.isUndefined(createdSection['invalidPropertyName']);

        // if this passes, use this notebook in the following tests
        section = createdSection;
        return Promise.resolve();

      });
  });

  
  it('Create a OneNote page in a section with basic text content', function() {
      return getClient()
        .api(`https://graph.microsoft.com/beta/me/notes/sections/${section.id}/pages`)
        .header("Content-Type", "text/html")
        .post(PageContent)
        .then((json) => {
            createdPage = json as Page;
            assert.isDefined(createdPage.id);
            assert.isDefined(createdPage.contentUrl);
            assert.isUndefined(createdPage['invalidPropertyName']);

            return Promise.resolve();
         });
  });

  it('Create a OneNote page from application/xhtml+xml content and boundary headers', function() {
    return getClient()
        .api(`https://graph.microsoft.com/beta/me/notes/sections/${section.id}/pages`)
        .header("Content-Type", "application/xhtml+xml")
        .header("boundary", `MyPartBoundary${randomString()}`)
        .post(HTMLPageContent)
        .then((json) => {
            let createdPageFromHTML = json as Page;
            assert.isDefined(createdPage.id);
            assert.isDefined(createdPage.contentUrl);
            assert.equal(HTMLPageTitle, createdPageFromHTML.title)
            assert.isUndefined(createdPage['invalidPropertyName']);
            return Promise.resolve();
         });
  })
});