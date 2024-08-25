import Todos from '@/types/todos';
import axios from 'axios';
import { useEffect, useState } from "react"

export const usePost = (url:string) => {
    
    const [response,setResponse] = useState<Todos[] | null >(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)


    const postData = async (data:any) => {
        setLoading(true)
        setError(null)

        try{
            const res = await axios.post(url, data);
            setResponse(res.data);
        }

        catch(error){
            console.log("Error with posting",error)
        }

        finally{
            setLoading(false)
        }
    }

    return { postData, loading, error, response };
   
}