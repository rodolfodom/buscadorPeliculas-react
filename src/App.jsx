import React, { useState } from 'react';
import { styled } from 'styled-components';
import Welcome from './components/Welcome';
import getData from './logic/getData';
import CONSTATNTS from './logic/constants';
import MoviesGrid from './components/moviesGrid';

function App() {

  const [data, setData] = useState(null)
  const [query, setQuery] = useState("")
  const [lastQuery, setLastQuery] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (lastQuery === query) return
    setLastQuery(query)
    setData(await getData(CONSTATNTS.API_ENDPOINT + query))
  }

  return (
    <>
      <Welcome data={data} setQuery={setQuery} handleSubmit={handleSubmit}></Welcome>
      {data != null && <MoviesGrid data={data} />}
    </>

  )


}

export default App
