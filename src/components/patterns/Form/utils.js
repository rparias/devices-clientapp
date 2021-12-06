export const validateForm = (values) => {
  const errors = {}
  const regexNumbersOnly = /^[0-9]*$/
  if (!values.name || values.name.trim().length === 0) errors.name = 'System Name is required'
  if (!values.type) errors.type = 'Type is required'
  if (!values.capacity) {
    errors.capacity = 'HDD Capacity is required'
  } else if (values.capacity <= 0) {
    errors.capacity = 'HDD Capacity must be greater than 0'
  } else if (!regexNumbersOnly.test(values.capacity)) {
    errors.capacity = 'HDD Capacity must be a number'
  }
  return errors
}
