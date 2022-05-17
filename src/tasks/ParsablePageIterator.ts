import { AdditionalDataHolder, Parsable } from "@microsoft/kiota-abstractions";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";

import { GraphBaseClient, PageCollection, PageIterator, PageIteratorCallback } from "..";
type ParsablePageCollection = AdditionalDataHolder;
export class ParsablePageIterator extends PageIterator {
	public constructor(protected client: GraphBaseClient, collection: ParsablePageCollection, callback: PageIteratorCallback) {
		// set request options

		super(client, ParsablePageIterator.mapPageCollection(collection), callback);
		this.client = client;
	}

	private static mapPageCollection(collection: ParsablePageCollection): PageCollection {
		const pageCollection: PageCollection = {
			"@odata.nextLink": collection["nextLink"], // make this a constant
			value: collection["value"], // make this a constant
		};

		return pageCollection;
	}
}
