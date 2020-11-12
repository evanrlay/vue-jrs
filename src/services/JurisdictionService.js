export async function getAllJurisdictions() {
    const response = await fetch('/api/jurisdictions');
    return await response.json();
}

export async function getOneJurisdictions(jurisdictionId) {

    const response = await fetch('/api/jurisdictions/' + jurisdictionId);
    return await response.json();
}