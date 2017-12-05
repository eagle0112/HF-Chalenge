// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    // FireBase Configuration (Change it to your firebase configuration)
    apiKey: "AIzaSyCtEdxlMGiDdSa-Df0pCmLXD5huQDxa84w",
    authDomain: "hfchallenge.firebaseapp.com",
    databaseURL: "https://hfchallenge.firebaseio.com",
    projectId: "hfchallenge",
    storageBucket: "hfchallenge.appspot.com",
    messagingSenderId: "238806255958"
  }
};
