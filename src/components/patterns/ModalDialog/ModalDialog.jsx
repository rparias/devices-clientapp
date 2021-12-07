import React from 'react'
import Form from '../../patterns/Form'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import PropTypes from 'prop-types'

const ModalDialog = ({ open, handleOnClose, currentDevice }) => {
  return (
    <Dialog
      open={open}
      onClose={handleOnClose}
      PaperProps={{ style: { backgroundColor: '#95a5a6' } }}
      data-testid="dialog"
    >
      <DialogTitle>Device Attributes</DialogTitle>
      <DialogContent>
        <Form handleOnClose={handleOnClose} device={currentDevice} />
      </DialogContent>
    </Dialog>
  )
}

ModalDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOnClose: PropTypes.func.isRequired,
  currentDevice: PropTypes.object
}

export default ModalDialog
