function fetchCats(){
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(cats => {
        let payload = []

        payload = cats.images.map(cat => {
          return cat.url
        })
        dispatch({ type: 'FETCH_CATS', payload: payload })});
  };
}

export default fetchCats
