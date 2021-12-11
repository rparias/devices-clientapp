import React from 'react'
import Form from '../../patterns/Form'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import PropTypes from 'prop-types'

const ModalDialog = ({ open, handleOnClose, currentDevice, addDevice, updateDevice }) => {
  return (
    <Dialog
      open={open}
      onClose={handleOnClose}
      PaperProps={{ style: { backgroundColor: '#95a5a6' } }}
      data-testid="dialog"
    >
      <DialogTitle>Device Attributes</DialogTitle>
      <DialogContent>
        <Form
          handleOnClose={handleOnClose}
          device={currentDevice}
          addDevice={addDevice}
          updateDevice={updateDevice}
        />
      </DialogContent>
    </Dialog>
  )
}

ModalDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOnClose: PropTypes.func.isRequired,
  currentDevice: PropTypes.object,
  addDevice: PropTypes.func,
  updateDevice: PropTypes.func
}

export default ModalDialog
