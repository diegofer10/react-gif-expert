import {useState} from 'react'
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Ponch'] );

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;    // valido si existe el id , si existeel valor no lo agrego
     setCategories ([newCategory , ...categories ]) ;

}


  return (
    <>
       <h1>Gif Expert App</h1>
        <AddCategory   
           onNewCategory = {onAddCategory } 
        />
            {
              categories.map(    (category )   => (
                   <GifGrid 
                      key={category}
                      category={category}
                      
                   />
              ))
             }
    </>
  )
}
