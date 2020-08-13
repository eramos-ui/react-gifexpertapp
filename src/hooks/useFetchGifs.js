//todo hook empieza con use
// los hook son funciones idem components
// si no requiere JSX no requiere react
import { useState , useEffect } from 'react';
import {getGifs} from '../helpers/getGifs' ;

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState( {
        data: [],
        loading: true
    })

    useEffect( () => {
        getGifs( category )  
        .then ( imgs  => {
           //setTimeout( () =>{
               //console.log(imgs); 
              setState( {
                data: imgs,
                loading: false     
               });     
            //},3000)

       })
    },[ category ]) // esto hace que ejecute getGifs se ejecuta una sóla vez: la primera vez []
    // o cuando dice category se ejecuta cuando esta cambia
    
    //probando el 'cargando...'
    // setTimeout ( ()=> {
    // setState( {
    //     data: [1,2,3,4,5,6],
    //     loading: false
    // })
    // },3000 ) ;//se ejecutará a los 3 seg del otro
    return state; // {data:[], loading: true}
}

