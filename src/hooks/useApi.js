import { useEffect, useState } from "react"

const useApi = ({ url }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  
  const fetchData = async () => {
    try {
      const response = await (await fetch(url)).json()
      setData(response.results)
    } catch (error) {
      setError(prevError => !prevError)
    } finally {
      setLoading(prevLoading => !prevLoading)
    }  
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return {
    data,
    loading,
    // error
  }
}

export default useApi