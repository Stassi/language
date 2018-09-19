import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';

const propTypes = {
  classes: PropTypes.shape({
    marginTop: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
  elevation: PropTypes.number,
  moveDown: PropTypes.bool,
};

const defaultProps = {
  elevation: 1,
  moveDown: false,
};

function PaperSheet({
  children,
  elevation,
  moveDown,
  classes: {
    marginTop,
    root,
  },
}) {
  return (
    <Paper
      {...{
        elevation,
        className: classNames(
          root,
          moveDown && marginTop,
        ),
      }}
    >
      {children}
    </Paper>
  );
}

PaperSheet.propTypes = propTypes;
PaperSheet.defaultProps = defaultProps;

export default PaperSheet;
