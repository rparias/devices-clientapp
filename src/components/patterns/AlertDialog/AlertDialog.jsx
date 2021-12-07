import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import PropTypes from 'prop-types'

const AlertDialog = ({ open, handleOnClose, handleDelete }) => {
  return (
    <Dialog
      open={open}
      onClose={handleOnClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Are you sure to remove this device?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          If you remove this device, you will not be able to access it anymore.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose}>Disagree</Button>
        <Button onClick={handleDelete} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}

AlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOnClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default AlertDialog
