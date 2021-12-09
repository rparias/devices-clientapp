import React, { useState, useEffect } from 'react'
import Button from '../../components/elements/Button'
import Dropdown from '../../components/elements/Dropdown'
import Table from '../../components/patterns/Table'
import CircularProgress from '@mui/material/CircularProgress'
import ModalDialog from '../../components/patterns/ModalDialog'
import MultipleSelect from '../../components/patterns/MultipleSelect'
import { DashboardContainer, HeaderContainer } from './styles'
import { optionTypeList, filterSortByList } from '../../data/dropdown_options'
import { filterAndSortDevices } from '../../helper/utils'
import { createBrowserHistory } from 'history'
import Api from '../../helper/api'

const Dashboard = () => {
  const api = new Api()
  const history = createBrowserHistory()
  const [openDialog, setOpenDialog] = useState(false)
  const [devicesList, setDevicesList] = useState([])
  const [filteredDevicesList, setFilteredDevicesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [currentDevice, setCurrentDevice] = useState({})
  const [filterBy, setFilterBy] = useState([])
  const [sortBy, setSortBy] = useState('hdd-capacity')

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

  const updateUrl = (filterBy, sortBy) => {
    const url = `?filter=${filterBy.join(',')}&sort=${sortBy}`
    history.replace(url)
  }

  const handleOnChangeFilterByDeviceType = (e) => {
    const { value } = e.target
    const values = typeof value === 'string' ? value.split(',') : value
    setFilterBy(values)
    updateUrl(values, sortBy)
  }

  const handleOnChangeSortBy = (e) => {
    const { value } = e.target
    setSortBy(value)
    updateUrl(filterBy, value)
  }

  useEffect(() => {
    setIsLoading(true)
    const fetchDevices = async () => {
      try {
        const response = await api.getDevices()
        setDevicesList(response.data)
        setFilteredDevicesList(filterAndSortDevices(filterBy, sortBy, response.data))
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

  useEffect(() => {
    setFilteredDevicesList(filterAndSortDevices(filterBy, sortBy, devicesList))
  }, [sortBy, filterBy])

  return (
    <>
      <HeaderContainer className="bg-beige flex">
        <h1 className="text-dark ff-sans-normal fs-700 uppercase">Dashboard</h1>
      </HeaderContainer>
      <DashboardContainer>
        <div className="flex space-between options">
          <div className="flex options">
            <MultipleSelect
              value={filterBy}
              onChange={handleOnChangeFilterByDeviceType}
              options={optionTypeList}
              label="Device type"
            />
            <Dropdown
              label="Sort by:"
              name="sort"
              value={sortBy}
              onChange={handleOnChangeSortBy}
              optionsDropdown={filterSortByList}
            />
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
          <Table
            devicesData={filteredDevicesList}
            setCurrentDevice={setCurrentDevice}
            handleOnOpenDialog={handleOnOpenDialog}
          />
        )}
        {hasError && <p className="text-red">Something went wrong, please try again!</p>}
      </DashboardContainer>
    </>
  )
}

export default Dashboard
