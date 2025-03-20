import { useState } from "react";

export default function useLocalStorageState(key, initialState) {
    const [state, setState] = useState(() => {

        const localStorageState = localStorage.getItem(key);

        if (localStorageState) {
            const parsedValue = JSON.parse(localStorageState);
            return parsedValue;
        };

        return typeof (initialState) === 'function'
            ? initialState()
            : initialState
    });

    const setLocalStorageState = (initialState) => {

        const newStateValues = typeof (initialState) === 'function'
            ? initialState()
            : initialState

        const values = {
            ...newStateValues,
            isAuthenticated: !!newStateValues.accessToken
        };

        const stringifiedValues = JSON.stringify(values);

        localStorage.setItem(key, stringifiedValues);

        setState(values);
    };

    return [
        state,
        setLocalStorageState
    ]

}

