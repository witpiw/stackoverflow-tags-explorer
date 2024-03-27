import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchTags } from "./api/fetchTags"

function App() {
  const [pageNumber, setPageNumber] = useState(1)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['tags', { pageNumber }],
    queryFn: () => fetchTags({ page: pageNumber }),
    staleTime: Infinity
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !data) {
    return <p>Something went wrong while fetching data</p>
  }

  return (
    <>
      <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 1}>Prev page</button>
      <div>{pageNumber}</div>
      <button onClick={() => setPageNumber(pageNumber + 1)} disabled={"items" in data && !data.has_more}>Next page</button>
      <pre>{JSON.stringify(data, null, "\t")}</pre>
    </>

  )
}

export default App
