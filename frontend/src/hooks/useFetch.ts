import Todos from '@/types/todos';
import axios from 'axios';
import { useEffect, useState } from "react"

export const useFetch = (url:string) => {
    
    const [data,setData] = useState<Todos[] | null >(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url)
                console.log("Data:", response.data);
                setData(response.data)
            }
            catch (err) {
                console.log("Error");
            }
            finally{
                setLoading(false);
            }
        }

        fetchData();
    },[url])

    return {data,loading,error};
}