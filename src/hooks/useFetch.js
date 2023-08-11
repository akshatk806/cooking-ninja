import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsPending(true);

            try{
                const respone = await fetch(url, { signal: controller.signal });
                if(!respone.ok) {
                    throw new Error(respone.statusText);
                }
                const json = await respone.json();

                setIsPending(false);
                setData(json);
                setError(null)
            }
            catch(err) {
                if(err.name === "AbortError") {
                    console.log("The fetch was aborted");
                }
                else {
                    setIsPending(false);
                    setError("Could not fetch the data");
                    console.error("The error occured : ", err.message);
                }
            }
        }
        fetchData()
    
        return () => {
            controller.abort()
        }
    }, [url])
    
    return { data, isPending, error}
}
export default useFetch