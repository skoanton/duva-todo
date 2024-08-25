import { useState } from "react";
import axios from "axios";

export const useDelete = (url:string) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const deleteData = async () => {
        setLoading(true);

        try {
            const res = await axios.delete(url);
            setResponse(res.data);
        } catch (error) {
            console.error("Error with deleting:", error);
        } finally {
            setLoading(false);
        }
    };

    return { deleteData, response, loading };
};