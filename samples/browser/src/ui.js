let ui = {
	setDisplayName: (name) => {
		document.getElementById("displayName").innerHTML = name;
	},

	setProfilePicture: (imgBlob) => {
		document.getElementById("profileImg").setAttribute("src", URL.createObjectURL(imgBlob));
	},

	updateOutput: (res) => {
		document.getElementById("output").innerHTML = JSON.stringify(res);
	},
};
