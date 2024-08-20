import { NextRequest, NextResponse } from "next/server";

const fetchCredentials = async () => {
  const form = new URLSearchParams();
  form.append('client_id', process.env.POWER_CLIENT_ID || '');
  form.append('scope', 'https://analysis.windows.net/powerbi/api/.default');
  form.append('grant_type', 'client_credentials');
  form.append('client_secret', process.env.POWER_SECRET || '');
  const data = await fetch(
    `https://login.microsoftonline.com/46ce6912-4c3a-477e-b44d-ec89af1ae1d0/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: form.toString(),
    }
  ).then((res) => res.json());
  return data;
};

export async function GET(request: NextRequest) {
  const credentials = await fetchCredentials();
  
  return NextResponse.json({ credentials }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}