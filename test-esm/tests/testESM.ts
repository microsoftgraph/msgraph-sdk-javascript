import "isomorphic-fetch";

import { ChaosHandler, ChaosHandlerOptions, ChaosStrategy, Client, ClientOptions } from "@microsoft/microsoft-graph-client";
import { assert } from "chai";

const middleware = new ChaosHandler();
const clientOptions: ClientOptions = {
	middleware,
};

export const TestClient = Client.initWithMiddleware(clientOptions);

describe("", () => {
	it("should work", async () => {
		const responseBody = {
			"@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users/$entity",
			businessPhones: ["+1 412 555 0109"],
			displayName: "Megan Bowen",
			givenName: "Megan",
			userPrincipalName: "MeganB@M365x214355.onmicrosoft.com",
			id: "48d31887-5fad-4d73-a9f5-3c356e68a038",
		};

		const middlewareOptions = [new ChaosHandlerOptions(ChaosStrategy.MANUAL, "middleware options", 200, 0, JSON.stringify(responseBody)), new Headers({ "Content-Type": "application/json", "content-length": "100" })];

		const response = JSON.parse(await TestClient.api("/me").middlewareOptions(middlewareOptions).get());
		assert.isDefined(response);
        assert.isDefined(response["id"]);
        assert.equal(response["displayName"], responseBody.displayName);
	});
});
