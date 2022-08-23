export default async () => {
	try {
		const response = await fetch(`https://api.artic.edu/api/v1/artworks?limit=4`);

		if (!response.ok) return;

		const artworks = await response.json();

		return artworks;

	} catch (error) {
		return
	}
}