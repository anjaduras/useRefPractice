import React, { useEffect, useRef, useState } from 'react';
import './App.css';

export default function App() {

  // ########## CASE 1: COUNTING THE RENDERING #########

  const [name, setName] = useState('');
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // ########## CASE 2: FOCUSING ON THE ELEMENT #########

  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
    // inputRef.current.value = "Some value"
    // Der obige Code ist möglich, aber nicht erforderlich!  Anstatt den Wert manuell zuzuweisen, sollten Sie UseState verwenden
  }

  // ########## CASE 3: REFERRING TO THE PREVIOUS STATE #########

  const [otherName, setOtherName] = useState('');
  const prevOtherNameRef = useRef('');

  useEffect(() => {
    prevOtherNameRef.current = otherName;
  }, [otherName]);

  return (
    <div className="App">
      <h1>React useRef Hook Example</h1>
      <br /><br />
      <h3>Case 1: counting the rendering</h3>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is <span className="name">{name}</span> </div>
      <div>I rendered the code {renderCount.current} times</div>
      <br /><br /><br />

      <h3>Case 2: focusing on element</h3>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
      <br /><br /><br />

      <h3>Case 3: referring to the previous state</h3>
      <input value={otherName} onChange={e => setOtherName(e.target.value)} />
      <div>My other name is <span className="name">{otherName}</span> and it used to be <span className="name">{prevOtherNameRef.current}</span></div>
    </div>
  );
}
