export const fetchSSO = async (accessToken) => {
  let res = await fetch(
    `/.netlify/functions/fetch-sso`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  return res.json();
};
