const optionTypeList = [
  {
    label: 'Windows Workstation',
    value: 'windows-workstation',
    id: '1-windows-workstation'
  },
  {
    label: 'Windows Server',
    value: 'windows-server',
    id: '2-windows-server'
  },
  {
    label: 'Mac',
    value: 'mac',
    id: '3-mac'
  }
]

const filterDeviceTypeList = [
  {
    label: 'All',
    value: 'all',
    id: '0-all'
  },
  ...optionTypeList
]

const filterSortByList = [
  {
    label: 'HDD Capacity',
    value: 'hdd-capacity',
    id: '1-hdd-capacity'
  },
  {
    label: 'System Name',
    value: 'system-name',
    id: '2-system-name'
  }
]

export { optionTypeList, filterDeviceTypeList, filterSortByList }
