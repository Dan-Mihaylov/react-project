import { useState, useEffect } from "react";


export function useShortDescription (description) {

    const [ shortDescription, setShortDescription ] = useState('');

    useEffect(() => {
        setShortDescription(`${description.slice(0, 100)}...`);
    }, [description])

    return {
        shortDescription,
    }
}
