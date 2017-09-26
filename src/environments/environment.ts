// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: "AIzaSyBgNmHpouUh0l-z98qS7ReE2Vws-WeDu9c",
    authDomain: "ro-angular-fire.firebaseapp.com",
    databaseURL: "https://ro-angular-fire.firebaseio.com",
    projectId: "ro-angular-fire",
    storageBucket: "",
    messagingSenderId: "411743479506"
	}
};
