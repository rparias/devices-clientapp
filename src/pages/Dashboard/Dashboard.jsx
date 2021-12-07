import React, { useState, useEffect } from 'react'
import Button from '../../components/elements/Button'
import Dropdown from '../../components/elements/Dropdown'
import Table from '../../components/patterns/Table'
import CircularProgress from '@mui/material/CircularProgress'
import ModalDialog from '../../components/patterns/ModalDialog'
import { DashboardContainer, HeaderContainer } from './styles'
import { filterDeviceTypeList, filterSortByList } from '../../data/dropdown_options'
import Api from '../../helper/api'

const Dashboard = () => {
  const api = new Api()
  const [openDialog, setOpenDialog] = useState(false)
  const [devicesList, setDevicesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [currentDevice, setCurrentDevice] = useState({})

  const handleOnOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleOnCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleOnAddDevice = () => {
    setCurrentDevice({})
    handleOnOpenDialog()
  }

  useEffect(() => {
    setIsLoading(true)
    const fetchDevices = async () => {
      try {
        const response = await api.getDevices()
        setDevicesList(response.data)
        setHasError(false)
      } catch (error) {
        setHasError(true)
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchDevices()
  }, [])

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
          <Button onClick={handleOnAddDevice}>Add Device</Button>
        </div>
        <ModalDialog
          open={openDialog}
          handleOnClose={handleOnCloseDialog}
          currentDevice={currentDevice}
        />
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Table devicesData={devicesList} setCurrentDevice={setCurrentDevice} />
        )}
        {hasError && <p className="text-red">Something went wrong, please try again!</p>}
      </DashboardContainer>
    </>
  )
}

export default Dashboard
