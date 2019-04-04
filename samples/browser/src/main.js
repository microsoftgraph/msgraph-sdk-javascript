window.addEventListener(
	"load",
	() => {
		init();
	},
	false,
);

let client, scopes;
const init = async () => {
	scopes = ["user.read", "profile", "User.ReadWrite", "User.Readwrite.All", "User.Invite.All", "contacts.read", "Notes.ReadWrite", "Notes.Read", "Notes.Create", "Files.Read", "Files.Read.All", "Files.ReadWrite", "Files.ReadWrite.All", "Mail.Read", "Mail.ReadWrite", "Mail.Send"];

	const callback = (errorDesc, token, error, tokenType) => {};
	const options = {
		redirectUri: "http://localhost:8080",
	};
	const userAgentApplication = new Msal.UserAgentApplication(Secrets.clientId, undefined, callback, options);
	let msalProvider = new MicrosoftGraph.MSALAuthenticationProvider(userAgentApplication, scopes);
	client = new MicrosoftGraph.Client({
		debugLogging: true,
		authProvider: msalProvider,
	});

	bindEvents();

	// let displayName = await request.getDisplayName();
	// ui.setDisplayName(displayName);

	// let profileImg = await request.getProfilePicture();
	// ui.setProfilePicture(profileImg);
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
