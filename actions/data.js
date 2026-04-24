'use server';
import axios from "axios";

export const getData = async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL, {
        timeout: 30000
    });

    return res.data.data;
};