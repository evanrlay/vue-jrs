export async function getAllInsuranceCarriers() {

    const response = await fetch('/api/insurance-carriers');
    return await response.json();
}