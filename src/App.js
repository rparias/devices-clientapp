import React from 'react'
import GlobalStyle from './globalStyles'
import Table from './components/patterns/Table'
import Form from './components/patterns/Form'
import Button from './components/elements/Button'

function App() {
  return (
    <>
      <GlobalStyle />
      <h1 className="text-white ff-sans-normal">Devices Client App</h1>
      <Button>Click me</Button>
      <Form />
      <Table />
    </>
  )
}

export default App
