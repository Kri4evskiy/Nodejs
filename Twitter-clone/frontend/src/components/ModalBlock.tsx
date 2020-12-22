import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { useStylesSignIn } from '../pages/SignIn'

interface ModalBlockProps {
  title?: string
  children: React.ReactNode
  classes?: ReturnType<typeof useStylesSignIn>
  visible?: boolean
  onClose: () => void
}

export const ModalBlock: React.FC<ModalBlockProps> = ({
  visible = false,
  title,
  onClose,
  children,
}: ModalBlockProps): React.ReactElement | null => {
  if (!visible) {
    return null
  }

  return (
    <Dialog
      open={visible}
      onClose={onClose}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>
        <IconButton onClick={onClose} color='secondary'>
          <CloseIcon style={{ fontSize: 26 }} color='primary' />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}
