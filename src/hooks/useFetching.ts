import {useState} from "react";

export const useFetching = (callback: CallableFunction): [(...args: unknown[]) => Promise<void>, boolean, string] => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args: unknown[]) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e: unknown) {
            if (e instanceof Error) {
                setError(e.message);
            }
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}
