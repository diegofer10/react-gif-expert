


export const getGifs = async(category) => {
    //const url =`https://api.giphy.com/v1/gifs/search?api_key=AWofyK97DCqXQf7EPrG8dG6rd15fSWuA&q=${category}&limit=10` 

    //const url =//`https://api.giphy.com/v1/gifs/search?api_key=AWofyK97DCqXQf7EPrG8dG6rd15fSWuA&q=${category}&limit=10`
    const url =`https://api.giphy.com/v1/gifs/search?api_key=PqyEpZOPbExW2C6KKsbkVrAqRqDn5Bhd&q=${category}&limit=10`
  
    //pteticion http
    const resp = await fetch(url);
    //agarro la info de la API
    const {data} = await resp.json();

    const gifs = data.map( img => ({
         //retorno el objetoto
            id: img.id,
            title: img.title,
            url:img.images.downsized_medium.url

    }));

    return gifs;

} 
