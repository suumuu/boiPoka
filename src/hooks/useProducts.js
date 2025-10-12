import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const[products, setProduts] = useState([]);  
    const[error,setError] = useState(null); 
    const[loading, setLoading] = useState(true);

     useEffect(() => {
        axios('../furnitureData.json')
        .then(data => setProduts(data.data))
        .catch(err=>setError(err))
        .finally(()=>setLoading(false))
      },[])

      return {products, error, loading};
}

export default useProducts;