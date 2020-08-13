import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    //const {data , loading }=useFetchGifs();
    const { data : images  ,loading }=useFetchGifs( category );
    //console.log( loading);
    //const [count, setCount] = useState(0);
    
    // const [images,setImages] = useState([]);
    // useEffect(() => {
    //     //getGifs();
    //     getGifs(category)
    //     //.then (imgs => setImages( imgs));
    //     //o como sigue
    //     .then ( setImages);
    // },[ category ]) // esto hace que ejecute getGifs se ejecuta una sóla vez: la primera vez []
    // cuando dice category se ejecuta cuando esta cambia

    //se movió lo que sigue al helpers getGifs
    // const getGifs = async  ( ) => {
    //     const categ= encodeURI( category);
    //     const app_key='AiK7TVLhlLp83ROFHwHdxNvo1B2LICG4'
    //     const url='https://api.giphy.com/v1/gifs/search?q='+categ+'&limit=10&api_key='+app_key;
    //     const resp = await fetch ( url );
    //     const {data } = await resp.json();

    //     const gifs =data.map( img =>{// este arreglo es para extrar del data lo que me importa
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url// es ? es para asegurarnos que sólo interesa si vienen datos
    //         }
    //     })
    //     console.log(gifs);
    //     setImages( gifs);
    // }
    // // getGifs();
    return (
        <> 
        <h3 className="animate__animated animate__fadIn" >{ category  }</h3>
        {loading && <p className="animate__animated animate__flash"  >Cargando</p>}
            <div className="card-grid">
                {/* <h3 >{ category }</h3> */}
                {/* {botón para mostrar que lee reiteradas veces-cada vez que se apriete el botón} */}
                {/* <h3> {count}</h3>
                <button onClick = { () => setCount (count +1 )}></button> */}
                {/* <ol> */}
                    {/* <li>item </li>
                {
                    // images.map ( img => (
                    //     <li key ={ img.id } > {img.title }</li>
                    // ))
                    // o desestructurado
                    images.map ( ({id,title} ) => (
                            <li key ={ id } > {title }</li>
                    ))
                } */}
                {/* </ol> */}
                {/* sacando lo anterior al componente GifGridItem */}
                {
                    images.map ( img => (
                            <GifGridItem
                            key= { img.id }
                            {...img } 
                            />
                    ))
                }
            </div>

        </>

    )
}
