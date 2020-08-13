import React,{useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const  GiftExpertApp = () => {
    //const categories =['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    //const handleAdd = () =>{
         //categories.push ('HunterXHunter');
         //setCategories(['HunterXHunter',...categories]);
         //que también se puede escribir como call back
         //setCategories( cats=> ['HunterXHunter',...cats]);

    //}
    return (
        <>
        <h2>GiftExpertApp</h2>
        <AddCategory  setCategories ={ setCategories } /> 
        <hr />

        {/* <button onClick ={handleAdd}>Agregar</button> */}
        <ol>
        {
          //categories.map ((category,i) => { // map recibe 2 arg
              //console.log (' Hola ');
              //return <li key = {i} > Hola</li> // no combiene usar el i como index
        //   categories.map (category => {
        //   return <li key = { category } > {category}</li>
        //   })
        // y escrita en una línea sería, el paréntesis despues de la flecha es opcional
            // categories.map (category => (
            // <li key = { category } > {category}</li>
            // ))
            //usando el componente 
        }
          {
            categories.map ( category => (
                <GifGrid 
                key ={ category}
                category  = { category }
                /> 
            ))
            }  

         </ol>
         </>
   )
}

export default GiftExpertApp;