import React from 'react'
 
//export const GifGridItem = ( props ) => {
    //recibiendo cada una de las propiedades puede verse más claro
    export const GifGridItem = ( {title, url }) => {
    //console.log ({id, title, url });
    return (
        <div className="card animate__animated animate__bounce">
            {/* { img.title } */}
            <img src = { url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}
