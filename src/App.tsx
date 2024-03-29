import { Table } from "./components/Table"
import { useTags } from "./hooks/useTags"

import "./styles/global.css"

function App() {
  const { data, isLoading, error } = useTags()

  return (
    <Table data={data} loading={isLoading} error={error} />
  )
}

export default App
