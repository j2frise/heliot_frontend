export const config = {
  appId: '662618426239-u770377l0a41o3390e07fhca23clqbh9.apps.googleusercontent.com',
  secretKey: 'WrFGLvztrz4vbDp7POiw5574',
  scope: ["profile", "email"]
}

//Local version
export const url = {
  redirectUri: 'http://localhost:3000',
  backend: 'http://localhost:8080'
}

// Prod version
/*
export const url = {
  redirectUri: 'https://heliot.netlify.app/',
  backend: 'https://heliot.herokuapp.com/'
}
*/