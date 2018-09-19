import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import CommentIcon from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const propTypes = {
  actions: PropTypes.shape({
    handleToggle: PropTypes.func.isRequired,
    isSelected: PropTypes.func.isRequired,
  }).isRequired,
  collection: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  selected: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

const defaultProps = { collection: [] };

function CheckboxList({
  collection,
  selected,
  actions: {
    handleToggle,
    isSelected,
  },
}) {
  return (
    <List>
      {collection.map(({ id, title }) => (
        <ListItem
          button
          dense
          key={id}
          onClick={() => handleToggle(id)}
          role={undefined}
        >
          <Checkbox
            checked={isSelected({ id, selected })}
            disableRipple
            tabIndex={-1}
          />

          <ListItemText primary={title} />

          <ListItemSecondaryAction>
            <IconButton aria-label="Comments">
              <CommentIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

CheckboxList.propTypes = propTypes;
CheckboxList.defaultProps = defaultProps;

export default CheckboxList;
