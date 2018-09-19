import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import DialogActionsMaterial from '@material-ui/core/DialogActions';
import SaveIcon from '@material-ui/icons/Save';

const propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string.isRequired,
    iconSmall: PropTypes.string.isRequired,
    leftIcon: PropTypes.string.isRequired,
  }).isRequired,
  close: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

function DialogActions({
  close,
  submit,
  classes: {
    button,
    iconSmall,
    leftIcon,
  },
}) {
  return (
    <DialogActionsMaterial>
      <Button
        className={button}
        color="secondary"
        onClick={close}
      >
        Close
      </Button>

      <Button
        className={button}
        color="primary"
        onClick={submit}
        size="small"
        variant="contained"
      >
        <SaveIcon className={classNames(iconSmall, leftIcon)} />
        Save
      </Button>
    </DialogActionsMaterial>
  );
}

DialogActions.propTypes = propTypes;

export default DialogActions;
