import { useState } from 'react'

const useDevice = (initialValue = []) => {
  const [devicesList, setDevicesList] = useState(initialValue)

  const addDevice = (device) => {
    setDevicesList([...devicesList, device])
  }

  const deleteDevice = (id) => {
    setDevicesList(devicesList.filter((currentDevice) => currentDevice.id !== id))
  }

  const updateDevice = (device) => {
    const deviceIndex = devicesList.findIndex((currentDevice) => currentDevice.id === device.id)
    const newDevicesList = [...devicesList]
    newDevicesList[deviceIndex] = device
    setDevicesList(newDevicesList)
  }

  return [devicesList, setDevicesList, addDevice, updateDevice, deleteDevice]
}

export default useDevice
