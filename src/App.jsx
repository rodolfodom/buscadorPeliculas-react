import React, { useState } from 'react';
import { styled } from 'styled-components';
import Welcome from './components/Welcome';
import getData from './logic/getData';
import CONSTATNTS from './logic/constants';

function App() {

  const [data, setData] = useState(null)
  const [query, setquery] = useState(null)
  const [lastquery, setLastQuery] = useState(null)

  if (data == null) return <Welcome></Welcome>


}

export default App
