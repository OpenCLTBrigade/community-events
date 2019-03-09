import { useState, useEffect } from 'react'
function useFetch<T>(url: string): [T | undefined, boolean] {
    const [data, setData] = useState<T | undefined>(undefined)
    const [loading, setLoading] = useState(true)

    async function fetchUrl() {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
        setData(json)
        setLoading(false)
    }

    useEffect(() => {
        fetchUrl()
    }, [])

    return [data, loading]
}
export { useFetch }
