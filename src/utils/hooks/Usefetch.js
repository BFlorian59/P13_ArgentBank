import { useEffect, useState } from "react";

export function UseFetch(url) {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        setLoading(true)

        async function fetchData(){
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (error) {
                console.log(error)
                setError(true)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[url])
    return{isLoading, data, error}
}