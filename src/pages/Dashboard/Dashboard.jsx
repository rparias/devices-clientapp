import React, { useState } from 'react'
import Button from '../../components/elements/Button'
import Dropdown from '../../components/elements/Dropdown'
import Table from '../../components/patterns/Table'
import ModalDialog from '../../components/patterns/ModalDialog'
import { DashboardContainer, HeaderContainer } from './styles'
import { filterDeviceTypeList, filterSortByList } from '../../data/dropdown_options'
import { devices } from '../../data/mocks'

const Dashboard = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [devicesList, setDevicesList] = useState(devices)

  const handleOnOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleOnCloseDialog = () => {
    setOpenDialog(false)
  }

  return (
    <>
      <HeaderContainer className="bg-beige flex">
        <h1 className="text-dark ff-sans-normal fs-700 uppercase">Dashboard</h1>
      </HeaderContainer>
      <DashboardContainer>
        <div className="flex space-between options">
          <div className="flex options">
            <Dropdown label="Device Type:" name="type" optionsDropdown={filterDeviceTypeList} />
            <Dropdown label="Sort by:" name="sort" optionsDropdown={filterSortByList} />
          </div>
          <Button onClick={handleOnOpenDialog}>Add Device</Button>
        </div>
        <ModalDialog open={openDialog} handleOnClose={handleOnCloseDialog} />
        <Table devicesData={devicesList} />
      </DashboardContainer>
    </>
  )
}

export default Dashboard
