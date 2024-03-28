import { Table } from "./components/Table"
import { useParametersStore } from "./hooks/useParametersStore"

function App() {
  const { setPage, page } = useParametersStore()

  return (
    <>
      <button onClick={() => setPage(page - 1)}>Prev page</button>
      <div>{page}</div>
      <button onClick={() => setPage(page + 1)}>Next page</button>
      <Table />
    </>

  )
}

export default App
