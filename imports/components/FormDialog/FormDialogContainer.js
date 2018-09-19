import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormDialog from './FormDialogWithStyles';
import {
  close,
  insertSource,
  open,
} from './actions';

export default class FormDialogContainer extends Component {
  static propTypes = { notify: PropTypes.func.isRequired };

  state = {
    content: '',
    isOpen: false,
    title: '',
  };

  render() {
    const {
      state,
      props: {
        notify,
        ...props
      },
      state: {
        content,
        title,
      },
    } = this;

    return (
      <FormDialog
        {...{
          actions: {
            close: () => this.setState(close),
            handleTextChange: state => event =>
              this.setState({ [state]: event.target.value }),
            open: () => this.setState(open),
            submit: (e) => {
              e.preventDefault();
              insertSource({ content, title })
                .then(() => {
                  notify(`Source "${title} added.`);
                  this.setState(close);
                })
                .catch(({ message }) => {
                  notify(`Failed to add source "${title}". Reason: "${message}"`);
                  this.setState(close);
                });
            },
          },
          ...state,
          ...props,
        }}
      />
    );
  }
}
