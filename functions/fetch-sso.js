const Cumulio = require("cumulio");
const fetch = require("node-fetch");
const { requireAuth } = require("../.netlify/lib/auth");

export const handler = requireAuth(async (event, context) => {
  const { claims, token } = context.identityContext;
  let ssoResponse;
  const userRes = await fetch(
    `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${claims.sub}`,
    {
      headers: new fetch.Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    }
  );

  const user = await userRes.json();

  const client = new Cumulio({
    api_key: process.env.CUMUL_KEY,
    api_token: process.env.CUMUL_TOKEN,
    host: "https://api.cumul.io",
  });

  try {
    const generateSSOcredentials = async () => {
      return await client.create("authorization", {
        integration_id: "da65ca62-fd24-4a54-8a00-6434dea90d7b",
        type: "sso",
        expiry: "24 hours",
        inactivity_interval: "10 minutes",
        username: user.user_id,
        name: user.name,
        email: user.email,
        suborganization: claims.brand,
        role: "viewer",
        metadata: {
          brand: [claims.brand],
        },
        theme: {
          id: claims.theme,
          type: "foo",
          itemsBackground: "#fff",
          colors: ["#fff"],
        },
      });
    };
    ssoResponse = await generateSSOcredentials();
  } catch (err) {
    console.log(err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Something went wrong, please try again later",
      }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ token: ssoResponse.token, key: ssoResponse.id }),
  };
});
