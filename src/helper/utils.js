export const filterByDeviceType = (deviceTypes, devices) => {
  return devices.filter((device) => deviceTypes.includes(device.type))
}

export const sortInAlphabeticalOrder = (devices) => {
  return devices.sort((a, b) => {
    if (a.system_name < b.system_name) {
      return -1
    }
    if (a.system_name > b.system_name) {
      return 1
    }
    return 0
  })
}

export const sortByHddCapacityLowToHigh = (devices) => {
  return devices.sort((a, b) => {
    if (parseInt(a.hdd_capacity) < parseInt(b.hdd_capacity)) {
      return -1
    }
    if (parseInt(a.hdd_capacity) > parseInt(b.hdd_capacity)) {
      return 1
    }
    return 0
  })
}

export const filterBySystemName = (systemName, devices) => {
  return devices.filter((device) => device.system_name.includes(systemName))
}

export const filterAndSortDevices = (deviceTypes, sortBy, devicesList) => {
  let filterDevices = []
  let devices = []

  if (deviceTypes.length === 0) {
    filterDevices = [...devicesList]
  } else {
    filterDevices = filterByDeviceType(deviceTypes, devicesList)
  }

  const filteredDevices = [...filterDevices]
  switch (sortBy) {
    case 'hdd-capacity':
      devices = sortByHddCapacityLowToHigh(filteredDevices)
      break
    case 'system-name':
      devices = sortInAlphabeticalOrder(filteredDevices)
      break
    default:
      devices = filteredDevices
      break
  }
  return devices
}

export const convertStringToArray = (string) => {
  return typeof string === 'string' ? string.split(',') : string
}
