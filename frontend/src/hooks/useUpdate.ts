import { useState } from "react";
import axios from "axios";

export const useUpdate = (url:string) => {

    const [loading, setLoading] = useState(false);

    const updateData = async (data:any) => {
        setLoading(true);

        try {
            const res = await axios.put(url, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return res.data
        } catch (error) {
            console.error("Error with updating:", error);

        } finally {
            setLoading(false);
        }
    };

    return { updateData, loading };
};