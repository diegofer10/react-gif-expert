import { useEffect, useState } from "react";
import { getGifs } from "../components/helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const getImage = async ()=> {
     const newImages = await getGifs (category);
     setImages (newImages);
     setIsLoading(false);
   }
 
    useEffect  (  ()=> {
     getImage();
    },[])  //corchetes significa que la primer ves se hace nada mas 
  
    return {
        images,
        isLoading 
    }
}
