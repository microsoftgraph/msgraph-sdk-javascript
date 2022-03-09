import { Middleware, RetryHandler } from "@microsoft/kiota-http-fetchlibrary";


export function getGraphMiddlewareswithTelemetry() {
   
		// Browsers handles redirection automatically and do not require the redirectionHandler

		const middlewareArray: Middleware[] = [];
		const retryHandler = new RetryHandler(new RetryHandlerOptions());
		middlewareArray.push(retryHandler);
		if (customFetch) {
			middlewareArray.push(new CustomFetchHandler(customFetch));
		} else {
			middlewareArray.push(new CustomFetchHandler(fetch as any));
		}
		return middlewareArray;
    throw new Error("Function not implemented.");
}
