import React, { useEffect, useRef, useState } from 'react';
import './App.css';

export default function App() {
  const [name, setName] = useState('')
  // HOW TO NOT DO:
  // const [renderCount, setRenderCount] = useState(0)
  const renderCount = useRef(0)

  // HOW TO NOT DO:
  // useEffect(() => {
  //   setRenderCount(prevRenderCount => prevRenderCount + 1)
  // })

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <div className="App">
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is <span className="name">{name}</span> </div>
      {/* <div>I rendered {renderCount} times</div> */}
      <div>I rendered this code {renderCount.current} times</div>
    </div>
  );
}


