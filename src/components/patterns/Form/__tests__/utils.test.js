import { validateForm } from '../utils'

describe('Form Utils Validations', () => {
  it('should return an error when type is undefined', () => {
    const values = {
      type: undefined
    }
    const errors = validateForm(values)
    expect(errors.type).toBe('Type is required')
  })

  it('should return an error when name is undefined', () => {
    const values = {
      name: undefined
    }
    const errors = validateForm(values)
    expect(errors.name).toBe('System Name is required')
  })

  it('should return an error when name has only spaces', () => {
    const values = {
      name: '   '
    }
    const errors = validateForm(values)
    expect(errors.name).toBe('System Name is required')
  })

  it('should return an error when capacity is undefined', () => {
    const values = {
      capacity: undefined
    }
    const errors = validateForm(values)
    expect(errors.capacity).toBe('HDD Capacity is required')
  })

  it('should return an error capacity is less than zero', () => {
    const values = {
      capacity: -1
    }
    const errors = validateForm(values)
    expect(errors.capacity).toBe('HDD Capacity must be greater than 0')
  })

  it('should return an error capacity is not a number', () => {
    const values = {
      capacity: 'test'
    }
    const errors = validateForm(values)
    expect(errors.capacity).toBe('HDD Capacity must be a number')
  })
})
