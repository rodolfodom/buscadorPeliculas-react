import React, { useState } from 'react';
import { styled } from 'styled-components';
import Welcome from './components/Welcome';


function App() {
  const [data, setData] = useState(null)

  if (data == null) return <Welcome></Welcome>


}

export default App
