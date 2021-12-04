import React, { useState } from 'react'
import DashboardContainer from './styles'
import Button from '../../components/elements/Button'
import Table from '../../components/patterns/Table'
import ModalDialog from '../../components/patterns/ModalDialog'

const Dashboard = () => {
  const [openDialog, setOpenDialog] = useState(false)

  const handleOnOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleOnCloseDialog = () => {
    setOpenDialog(false)
  }

  return (
    <DashboardContainer>
      <h1 className="text-white ff-sans-normal">Devices Client App</h1>
      <Button onClick={handleOnOpenDialog}>Add Device</Button>
      <ModalDialog open={openDialog} handleOnClose={handleOnCloseDialog} />
      <Table />
    </DashboardContainer>
  )
}

export default Dashboard
