# PageIterator

For a variety of reasons, collections of entities are often split into pages and each page is returned with a URL to the next page. Sometimes, page granularity provided by the API does not match the requirements of the consumer. PageIterator simplifies consuming of paged collections.

## Iterate over all the messages

```typescript
async function callingPattern() {
	try {
		// Makes request to fetch mails list. Which is expected to have multiple pages of data.
		let response: PageCollection = await client.api("/me/messages").get();
		// A callback function to be called for every item in the collection. This call back should return boolean indicating whether not to continue the iteration process.
		let callback: PageIteratorCallback = (data) => {
			console.log(data);
			return true;
		};
		// Creating a new page iterator instance with client a graph client instance, page collection response from request and callback
		let pageIterator = new PageIterator(client, response, callback);
		// This iterates the collection until the nextLink is drained out.
		await pageIterator.iterate();
	} catch (e) {
		throw e;
	}
}
```

## Stopping and Resuming the iteration

```typescript
// Populating custom size pages if the api restricts to some maximum size. Lazy loading more data on user prompt or something, stop and resume will do the trick.
async function customSize() {
	try {
		let response: PageCollection = await client.api("/me/messages").get();
		let size = 1000;
		let count = 0;
		let callback: PageIteratorCallback = (data) => {
			console.log(data);
			count++;
			if (count === size) {
				count = 0;
				return false;
			}
			return true;
		};
		let pageIterator = new PageIterator(client, response, callback);
		// This stops iterating over for 1000 entities.
		await pageIterator.iterate();

		// Resuming will do start from where it left off and iterate for next 1000 entities.
		// Check and resume is likely to be called in any user interaction requiring to load more data.
		if (!pageIterator.isComplete()) {
			await pageIterator.resume();
		}
	} catch (e) {
		throw e;
	}
}
```
