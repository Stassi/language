import React from 'react';
import PropTypes from 'prop-types';
import DialogContentMaterial from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';

const propTypes = {
  content: PropTypes.string.isRequired,
  description: PropTypes.string,
  handleTextChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = { description: '' };

function DialogContent({
  content,
  description,
  handleTextChange,
  submit,
  title,
}) {
  return (
    <DialogContentMaterial>
      {description
        ? (
          <DialogContentText>
            {description}
          </DialogContentText>
        )
        : null
      }

      <form
        autoComplete="off"
        noValidate
        onSubmit={submit}
      >
        <TextField
          autoFocus
          fullWidth
          helperText="Distinct and memorable."
          id="name"
          label="Title"
          margin="normal"
          onChange={handleTextChange('title')}
          required
          value={title}
        />

        <TextField
          fullWidth
          helperText="Entire text content. Multiple lines are supported."
          id="multiline-flexible"
          label="Content"
          margin="normal"
          multiline
          onChange={handleTextChange('content')}
          required
          rows="2"
          rowsMax="8"
          value={content}
        />
      </form>
    </DialogContentMaterial>
  );
}

DialogContent.propTypes = propTypes;
DialogContent.defaultProps = defaultProps;

export default DialogContent;
