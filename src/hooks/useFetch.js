import { useState, useEffect } from "react"

const useFetch = (url, method = "GET") => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    // state for options
    const [options, setOptions] = useState(null)

    const postData = (postData) => {
        setOptions({
            method: "POST",
            headers: {
                "Content-Type": "application/json"   // the type of data we are sending in the POST request which is gonna be json data
            },
            body: JSON.stringify(postData)           // javascript into json strings for posting
        })
    }

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async (fetchOptions) => {
            setIsPending(true);

            try{
                const respone = await fetch(url, { ...fetchOptions, signal: controller.signal });
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
        // fetchData()
    
        if(method === "GET") {
            fetchData()
        }
        if(method === "POST" && options) {
            fetchData(options)
        }

        return () => {
            controller.abort()
        }
    }, [url, options, method])
    
    return { data, isPending, error, postData }
}
export default useFetch