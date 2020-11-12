export async function getAllLocations() {

    const response = await fetch('/api/locations');
    return await response.json();
}