// Sanity client — wires up once env vars exist
// Phase A: stub returns empty arrays so build doesn't crash without Sanity account

export async function getAllWork() {
  // TODO: replace with Sanity client.fetch() when SANITY_PROJECT_ID is set
  return [];
}

export async function getWorkBySlug(slug: string) {
  return null;
}

export async function getAllServices() {
  return [];
}
