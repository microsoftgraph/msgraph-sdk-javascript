window.addEventListener(
	"load",
	() => {
		init();
	},
	false,
);

let client;
const init = async () => {
	const scopes = ["user.read", "profile", "User.ReadWrite", "User.Readwrite.All", "User.Invite.All", "contacts.read", "Notes.ReadWrite", "Notes.Read", "Notes.Create", "Files.Read", "Files.Read.All", "Files.ReadWrite", "Files.ReadWrite.All", "Mail.Read", "Mail.ReadWrite", "Mail.Send"];

	const callback = (errorDesc, token, error, tokenType) => {};
	const options = {
		redirectUri: "http://localhost:8080",
	};
	const userAgentApplication = new Msal.UserAgentApplication(Secrets.clientId, undefined, callback, options);
	const msalOptions = new MicrosoftGraph.MSALAuthenticationProviderOptions(scopes);
	const msalProvider = new MicrosoftGraph.MSALAuthenticationProvider(userAgentApplication, msalOptions);
	client = MicrosoftGraph.Client.initWithMiddleware({
		debugLogging: true,
		authProvider: msalProvider,
	});

	bindEvents();
};

const bindEvents = () => {
	let requestsDOM = document.getElementById("requests");
	requestsDOM.addEventListener("click", (elem, event) => {
		let id = elem.srcElement.getAttribute("cell");
		switch (id) {
			case "1":
				request
					.getUserDetails()
					.then((res) => {
						ui.updateOutput(res);
					})
					.catch((error) => {
						ui.updateOutput(error);
					});
				break;

			case "2":
				request
					.getMyDriveFiles()
					.then((res) => {
						ui.updateOutput(res);
					})
					.catch((error) => {
						ui.updateOutput(error);
					});
				break;

			case "3":
				request
					.getMyMails()
					.then((res) => {
						ui.updateOutput(res);
					})
					.catch((error) => {
						ui.updateOutput(error);
					});
				break;

			case "4":
				break;
		}
	});
};
