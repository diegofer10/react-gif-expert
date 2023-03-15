import { useState } from "react";



export const AddCategory = ({ onNewCategory }) => {
 //estado del componente
 const [inputValue, setInputValue] = useState(' ')

 const onInputChange = ( {target}) =>{
    setInputValue (target.value);  // TOMA LO QUE ESCRIBIS EN EL input
 }

const onSubmit = ( event ) =>{
    event.preventDefault() ;   //
    
    if (inputValue.trim().length < 2 ) return;
  //  setCategories ( categories =>  [inputValue, ...categories ]) ;

    onNewCategory(inputValue.trim());
    setInputValue('');
 
}

  return (
        <form onSubmit={   onSubmit }>
              <input
                    type="text"
                    placeholder="Buscar gift"
                    value= {inputValue}
                    onChange = {   onInputChange  }
              />
        </form>
  )

        
}
