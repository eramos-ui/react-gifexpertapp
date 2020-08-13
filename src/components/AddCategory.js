import React,{ useState} from 'react' //raf tab

import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {
    const [inputValue, setInputValue] = useState('');// queda undifined , mejor ''
    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }
    //manejo del enter en el texto
    const handleSubmit = (e) =>{
        e.preventDefault(); //para prevenir el comportamiento por defecto del form
        //console.log('Submit hecho');
        // para no grabar el caso en blanco
        if (inputValue.trim().length >2 ){
              setCategories( cats=> [inputValue,...cats]);
              setInputValue('');
        }
      
        
    }
    return (// el form que sigue es para activar el submit, lo que se manda es el (e)
        <form onSubmit= { handleSubmit} >
        {/* <h1>{inputValue }</h1> */}
            <input 
               type="text"
               value={ inputValue}
               onChange= {handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
   }
   
