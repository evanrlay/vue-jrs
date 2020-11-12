export async function getAllUsers() {

    const response = await fetch('/api/users');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/api/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({users: data})
      })
    return await response.json();
}

export async function getUserTypes() {

    const response = await fetch('/api/user-types');
    return await response.json();
}