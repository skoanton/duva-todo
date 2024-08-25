import Todos from '@/types/todos';
import axios from 'axios';
import { useEffect, useState } from "react"

export const usePost = (url:string) => {
    

    const [loading,setLoading] = useState(true)


    const postData = async (data:any) => {
        setLoading(true)


        try{
            const res = await axios.post(url, data);
            return res.data;
         
        }

        catch(error){
            console.error("Error with adding:", error);
        }

        finally{
            setLoading(false)
        }
    }

    return { postData, loading };
   
}