/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-38z1i7rci1ymy0b5.us', // the auth0 domain prefix
    audience: 'coffee-shop', // the audience set for the auth0 app
    clientId: 'mzAMRfiqyuy2m46emSM1Bgz87kxHaHi9', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:4200', // the base url of the running ionic application. 
  }
};
