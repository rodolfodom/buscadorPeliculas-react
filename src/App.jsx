import React, { useEffect, useState } from 'react';
import Welcome from './components/Welcome';
import getData from './logic/getData';
import CONSTATNTS from './logic/constants';
import ResultsContainer from './components/resultsContainer';

function App() {

  const [data, setData] = useState(null)
  const [query, setQuery] = useState("")
  const [lastQuery, setLastQuery] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()
    setQuery(e.target.movieQuery.value)
  }

  useEffect(() => {

    if (query === "") return

    (async function () {
      setData(await getData(CONSTATNTS.API_ENDPOINT + query))
    })();



  }, [query])


  return (
    <>
      <Welcome data={data} handleSubmit={handleSubmit}></Welcome>
      {data != null && <ResultsContainer data={data} />}
    </>

  )


}

export default App
