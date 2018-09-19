import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button';

const propTypes = {
  classes: PropTypes.shape({
    fab: PropTypes.string.isRequired,
    fabMoveDown: PropTypes.string.isRequired,
    fabMoveUp: PropTypes.string.isRequired,
  }).isRequired,
  moveUp: PropTypes.bool,
};

const defaultProps = { moveUp: false };

function FloatingActionButton({
  moveUp,
  classes: {
    fab,
    fabMoveDown,
    fabMoveUp,
  },
  ...props
}) {
  return (
    <Button
      aria-label="Add"
      className={classNames(
        fab,
        moveUp
          ? fabMoveUp
          : fabMoveDown,
      )}
      color="primary"
      variant="fab"
      {...props}
    >
      <AddIcon />
    </Button>
  );
}

FloatingActionButton.propTypes = propTypes;
FloatingActionButton.defaultProps = defaultProps;

export default FloatingActionButton;
