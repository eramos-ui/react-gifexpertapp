//los helpers no renderizan son complementos como todos


export const getGifs = async  ( category ) => {
    const categ= encodeURI( category);
    const app_key='AiK7TVLhlLp83ROFHwHdxNvo1B2LICG4'
    const url='https://api.giphy.com/v1/gifs/search?q='+categ+'&limit=10&api_key='+app_key;
    const resp = await fetch ( url );
    const {data } = await resp.json();

    const gifs =data.map( img =>{// este arreglo es para extrar del data lo que me importa
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url// es ? es para asegurarnos que sólo interesa si vienen datos
        }
    })
    // console.log(gifs);
    // setImages( gifs);
    return gifs ;
    //esto retorna una premesa (async)
}


