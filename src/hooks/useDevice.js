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
    const newDevicesList = devicesList.map((currentDevice) => {
      if (currentDevice.id === device.id) {
        return device
      } else {
        return currentDevice
      }
    })
    setDevicesList(newDevicesList)
  }

  return [devicesList, setDevicesList, addDevice, updateDevice, deleteDevice]
}

export default useDevice
