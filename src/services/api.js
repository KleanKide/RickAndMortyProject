async function fetchAllData(url) {
  try {
    const allData = [];
    let currentUrl = url;

    while (currentUrl) {
      const response = await fetch(currentUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${currentUrl}`);
      }
      const data = await response.json();
      allData.push(...data.results);
      currentUrl = data.info.next; 
    }

    return allData;
  } catch (error) {
    console.error('API Error:', error);
    throw error; 
  }
}
export async function fetchDataById(type, id) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/${type}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${type} with id ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
export async function fetchDataByUrl(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}


export async function fetchEpisodeById(id) {
  return fetchDataById('episode', id);
}
export async function fetchCharacterById(id) {
  return fetchDataById('character', id);
}
export async function fetchLocationById(id) {
  return fetchDataById('location', id);
}


export async function fetchCharacters() {
  return fetchAllData('https://rickandmortyapi.com/api/character');
}

export async function fetchEpisodes() {
  return fetchAllData('https://rickandmortyapi.com/api/episode');
}
export async function fetchLocations() {
  return fetchAllData('https://rickandmortyapi.com/api/location');
}
