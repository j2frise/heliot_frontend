export const config = {
  appId: null,
  secretKey: null,
  scope: ["profile", "email"]
}

//Local version
/*
export const url = {
  redirectUri: 'http://localhost:3000',
  backend: 'http://localhost:8080'
}
*/

// Prod version
export const url = {
  redirectUri: 'https://heliot.netlify.app/',
  backend: 'https://heliot.herokuapp.com/'
}