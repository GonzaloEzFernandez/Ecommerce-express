import { useEffect, useState } from "react"

export const useFetch = url => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data.products))
      .catch(error => setError(error))
  }, [url])
  return { data, error }
}
