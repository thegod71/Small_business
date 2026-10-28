const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const isApiConfigured = Boolean(BASE_URL);

async function request(path, { method = 'GET', params, body } = {}) {
  const query = params
    ? `?${new URLSearchParams(Object.entries(params).filter(([, v]) => v !== undefined && v !== '' && v !== null))}`
    : '';
  const response = await fetch(`${BASE_URL}${path}${query}`, {
    method,
    headers: { 'Content-Type': 'application/json' }, // add Authorization here once login exists
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) throw new Error(`Request failed (${response.status})`);
  return response.json();
}

export const http = {
  get: (path, params) => request(path, { params }),
  post: (path, body) => request(path, { method: 'POST', body }),
};
