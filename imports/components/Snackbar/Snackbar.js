import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarMaterial from '@material-ui/core/Snackbar';

const propTypes = {
  actions: PropTypes.shape({
    close: PropTypes.func.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    closeIcon: PropTypes.string.isRequired,
    snackbar: PropTypes.string.isRequired,
    snackbarContent: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.string.isRequired,
  messageID: PropTypes.string,
  open: PropTypes.bool.isRequired,
};

const defaultProps = { messageID: 'snackbar-message-id' };

function Snackbar({
  message,
  messageID,
  open,
  actions: { close },
  classes: {
    closeIcon,
    snackbar,
    snackbarContent,
  },
}) {
  return (
    <SnackbarMaterial
      {...{
        open,
        action: (
          <IconButton
            aria-label="Close"
            className={closeIcon}
            color="inherit"
            onClick={close}
          >
            <CloseIcon />
          </IconButton>
        ),
        autoHideDuration: 4000,
        className: snackbar,
        ContentProps: {
          'aria-describedby': messageID,
          className: snackbarContent,
        },
        message: (
          <span id={messageID}>
            {message}
          </span>
        ),
        onClose: close,
      }}
    />
  );
}

Snackbar.propTypes = propTypes;
Snackbar.defaultProps = defaultProps;

export default Snackbar;
