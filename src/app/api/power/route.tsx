export const fetchCredentials = async () => {
  const data = await fetch(
    `https://login.microsoftonline.com/46ce6912-4c3a-477e-b44d-ec89af1ae1d0/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        client_id: process.env.POWER_CLIENT_ID,
        scope: 'https://analysis.windows.net/powerbi/api/.default',
        grant_type: 'client_credentials',
        client_secret: process.env.POWER_SECRET,
      }),
    }
  ).then((res) => res.json());
  return data.access_token;
};