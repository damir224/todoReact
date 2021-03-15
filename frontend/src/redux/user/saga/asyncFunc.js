export async function authFetch({ email, password, path }) {
  const url = `/auth/${path}`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

export async function getCheckFetch() {
  const url = '/auth/check';
  const response = await fetch(url);
  return await response.json();
}
