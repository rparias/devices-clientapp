import React from 'react'
import GlobalStyle from './globalStyles'
import Button from './components/Elements/Button/Button'

function App() {
  return (
    <>
      <GlobalStyle />
      <h1 className="text-white ff-sans-normal">Devices Client App</h1>
      <Button>Click me</Button>
    </>
  )
}

export default App
