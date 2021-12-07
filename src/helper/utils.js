export const filterByDeviceType = (deviceType, devices) => {
  return devices.filter((device) => device.type === deviceType)
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
