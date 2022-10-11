import { useState, useEffect } from 'react'

const useGet = (collection) => {
    const [fetchedData, setFetchedData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await fetch(`https://prime-a4520-default-rtdb.firebaseio.com/${collection}.json`)
            const data = await response.json()
            setFetchedData(data)
            setIsLoading(false)
        }
        fetchData().catch(err => { console.log(err) })
    }, [collection])

    return [fetchedData, isLoading]
}

export default useGet