export const fetchCredentials = async () => {
  const data = await fetch(
    `https://login.microsoftonline.com/46ce6912-4c3a-477e-b44d-ec89af1ae1d0/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        client_id: 'e1d78f0f-5708-45c5-81d5-a7cb1a9795a4',
        scope: 'https://analysis.windows.net/powerbi/api/.default',
        grant_type: 'client_credentials',
        client_secret: 'gUL8Q~V-3psGtGlLGp1AC~~qBmraaiSTF_Jkyccm',
      }),
    }
  ).then((res) => res.json());
  return data.access_token;
};