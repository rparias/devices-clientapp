import { filterByDeviceType, sortInAlphabeticalOrder, sortByHddCapacityLowToHigh } from '../utils'

describe('Utils helper functions', () => {
  const devices = [
    {
      id: 'Th3ngERn9',
      system_name: 'MAC-MOCK',
      type: 'MAC',
      hdd_capacity: '2048'
    },
    {
      id: 'e8okoP2l5',
      system_name: 'DESKTOP-MOCK',
      type: 'WINDOWS_WORKSTATION',
      hdd_capacity: '10'
    },
    {
      id: 'Q1JdBnE12',
      system_name: 'MOCK-SERVER',
      type: 'WINDOWS_SERVER',
      hdd_capacity: '256'
    },
    {
      id: 'e7ocoQ2n3',
      system_name: 'MIGUEL-PC',
      type: 'WINDOWS_WORKSTATION',
      hdd_capacity: '500'
    }
  ]
  it('should return a filterd list by device type', () => {
    const result = filterByDeviceType(['WINDOWS_WORKSTATION'], devices)
    expect(result).toEqual([
      {
        id: 'e8okoP2l5',
        system_name: 'DESKTOP-MOCK',
        type: 'WINDOWS_WORKSTATION',
        hdd_capacity: '10'
      },
      {
        id: 'e7ocoQ2n3',
        system_name: 'MIGUEL-PC',
        type: 'WINDOWS_WORKSTATION',
        hdd_capacity: '500'
      }
    ])
  })

  it('should return a list sorted in alphabetical order by system name', () => {
    const result = sortInAlphabeticalOrder(devices)
    expect(result).toEqual([
      {
        id: 'e8okoP2l5',
        system_name: 'DESKTOP-MOCK',
        type: 'WINDOWS_WORKSTATION',
        hdd_capacity: '10'
      },
      {
        id: 'Th3ngERn9',
        system_name: 'MAC-MOCK',
        type: 'MAC',
        hdd_capacity: '2048'
      },
      {
        id: 'e7ocoQ2n3',
        system_name: 'MIGUEL-PC',
        type: 'WINDOWS_WORKSTATION',
        hdd_capacity: '500'
      },
      {
        id: 'Q1JdBnE12',
        system_name: 'MOCK-SERVER',
        type: 'WINDOWS_SERVER',
        hdd_capacity: '256'
      }
    ])
  })

  it('should return a list sorted by hdd capacity from low to high', () => {
    const result = sortByHddCapacityLowToHigh(devices)
    expect(result).toEqual([
      {
        id: 'e8okoP2l5',
        system_name: 'DESKTOP-MOCK',
        type: 'WINDOWS_WORKSTATION',
        hdd_capacity: '10'
      },
      {
        id: 'Q1JdBnE12',
        system_name: 'MOCK-SERVER',
        type: 'WINDOWS_SERVER',
        hdd_capacity: '256'
      },
      {
        id: 'e7ocoQ2n3',
        system_name: 'MIGUEL-PC',
        type: 'WINDOWS_WORKSTATION',
        hdd_capacity: '500'
      },
      {
        id: 'Th3ngERn9',
        system_name: 'MAC-MOCK',
        type: 'MAC',
        hdd_capacity: '2048'
      }
    ])
  })
})
