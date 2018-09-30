import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBarMaterial from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const propTypes = {
  buttonName: PropTypes.string,
  classes: PropTypes.shape({
    flex: PropTypes.string.isRequired,
    displayNone: PropTypes.string.isRequired,
    menuButton: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired,
  }).isRequired,
  handleClicked: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  title: PropTypes.string,
};

const defaultProps = {
  buttonName: 'action',
  title: 'App',
};

function AppBar({
  buttonName,
  handleClicked,
  selected,
  title,
  classes: {
    flex,
    displayNone,
    menuButton,
    root,
  },
}) {
  const selectedCount = selected.length;
  const displayIfAnySelected = selectedCount
    ? null
    : displayNone;

  return (
    <div className={root}>
      <AppBarMaterial>
        <Toolbar>
          <IconButton
            aria-label="Menu"
            className={classNames(
              displayIfAnySelected,
              menuButton,
            )}
            color="inherit"
            onClick={handleClicked('deselect')}
          >
            {selectedCount
              ? <CloseIcon />
              : <MenuIcon />
            }
          </IconButton>

          <Typography
            className={flex}
            color="inherit"
            variant="title"
          >
            {selectedCount
              ? `${selectedCount} selected`
              : title
            }
          </Typography>

          <Button
            className={displayIfAnySelected}
            color="inherit"
            onClick={handleClicked(buttonName)}
          >
            {buttonName}
          </Button>
        </Toolbar>
      </AppBarMaterial>
    </div>
  );
}

AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;

export default AppBar;
