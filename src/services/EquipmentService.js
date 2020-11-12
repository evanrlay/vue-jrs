export async function getAllEquipment() {

    const response = await fetch('/api/equipment');
    return await response.json();
}

export async function createEquipment(data) {
    const response = await fetch(`/api/equipment`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({equipment: data})
      })
    return await response.json();
}

export async function getEquipmentTypes() {

    const response = await fetch('/api/equipment-types');
    return await response.json();
}