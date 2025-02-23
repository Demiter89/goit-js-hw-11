
export const fetchPhotosByQuery = searchedQuery => {
    const searchParams = new URLSearchParams({
      q: searchedQuery,
      key: '48302309-d155748c9a8bdc74060d05abe',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    });
  
    return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
  
      return response.json();
    });
  };
  
