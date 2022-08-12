const { NetlifyJwtVerifier,removeNamespaces } = require("@serverless-jwt/netlify");

export const requireAuth = NetlifyJwtVerifier({
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    mapClaims: (claims) => {
    const user = removeNamespaces('http://new-app.com/', claims);
    return user;
  }
});
