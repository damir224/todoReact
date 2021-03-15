export async function fetchDel(id) {
  const url = 'http://localhost:3100/todo/del';
  const response = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}
export async function fetchDone(todo) {
  const url = 'http://localhost:3100/todo/done';
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}
export async function fetchEdit({ id, editedTaskName }) {
  const url = 'http://localhost:3100/todo/edit';
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify({ id, editedTaskName }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}
export async function fetchRefresh() {
  const response = await fetch('http://localhost:3100/todo/refresh');
  return await response.json();
}

export async function fetchSearch(searchEl) {
  const url = 'http://localhost:3100/todo/search';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(searchEl),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}
