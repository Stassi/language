import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from './DialogActions';
import DialogContent from './DialogContent';

const propTypes = {
  actions: PropTypes.shape({
    close: PropTypes.func.isRequired,
    open: PropTypes.func.isRequired,
  }).isRequired,
  button: PropTypes.node.isRequired,
  dialogTitle: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
};

const defaultProps = { dialogTitle: 'Title' };

function FormDialog({
  button,
  classes,
  content,
  description,
  dialogTitle,
  isOpen,
  title,
  actions: {
    close,
    handleTextChange,
    open,
    submit,
  },
}) {
  return (
    <Fragment>
      {React.cloneElement(
        button,
        { onClick: open },
      )}

      <Dialog
        aria-labelledby="form-dialog-title"
        onClose={close}
        open={isOpen}
      >
        <DialogTitle id="form-dialog-title">
          {dialogTitle}
        </DialogTitle>

        <DialogContent
          {...{
            content,
            description,
            handleTextChange,
            submit,
            title,
          }}
        />

        <DialogActions
          {...{
            classes,
            close,
            submit,
          }}
        />
      </Dialog>
    </Fragment>
  );
}

FormDialog.propTypes = propTypes;
FormDialog.defaultProps = defaultProps;

export default FormDialog;
