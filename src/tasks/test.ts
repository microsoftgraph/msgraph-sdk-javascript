import { ParsablePageIterator } from "./ParsablePageIterator";
import { User } from "./user";
import { UserCollectionResponse } from "./userCollectionResponse";

const user1: User = {
	businessPhones: ["+1 425 555 0109"],
	displayName: "Adele Vance",
	givenName: "Adele",
	jobTitle: "Retail Manager",
	mail: "AdeleV@graphjsdemo.onmicrosoft.com",
	mobilePhone: null,
	officeLocation: "18/2111",
	preferredLanguage: "en-US",
	surname: "Vance",
	userPrincipalName: "AdeleV@graphjsdemo.onmicrosoft.com",
	id: "c5f4dca0-edd2-4d77-b759-fbdcbc079509",
};

const user2: User = {
	businessPhones: ["+1 918 555 0101"],
	displayName: "Isaiah Langer",
	givenName: "Isaiah",
	jobTitle: "Sales Rep",
	mail: "IsaiahL@graphjsdemo.onmicrosoft.com",
	mobilePhone: null,
	officeLocation: "20/1101",
	preferredLanguage: "en-US",
	surname: "Langer",
	userPrincipalName: "IsaiahL@graphjsdemo.onmicrosoft.com",
	id: "52a29f04-dfa9-4347-9a1f-7113879bd272",
};

const userCollectionResponse: UserCollectionResponse = {
	additionalData: {},
	value: [user1, user2],
};

const it = new ParsablePageIterator(null, userCollectionResponse, (user: User) => {
	console.log(user.displayName);
    return true;
});

it.iterate().then(() => {
    console.log("done");
});