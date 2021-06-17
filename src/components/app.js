import React, { useEffect, useState } from "react"

export default function App(props) {
  useEffect(() => {
    alert("dd")
  }, [])
  const [state, setState] = useState("ok")
  return (
    <div className="App">
      <header className="App-header">
        <img src="media/logo.svg" className="App-logo" alt="logo" />
        <button onClick={() => setState("done")}>
          Edit <code>{state}</code> and save to reload.
        </button>
        <p>{JSON.stringify(props)}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}
