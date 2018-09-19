import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Snackbar from './SnackbarWithStyles';
import { close, notify } from './actions';

export default class SnackbarContainer extends Component {
  static propTypes = { children: PropTypes.func.isRequired };

  state = {
    message: '',
    open: false,
  };

  render() {
    const {
      state,
      props: {
        children,
        ...props
      },
      state: { open },
    } = this;

    return (
      <Fragment>
        {children({
          open,
          notify: newMessage => this.setState(notify(newMessage)),
        })}

        <Snackbar
          {...{
            actions: { close: () => this.setState(close) },
            ...props,
            ...state,
          }}
        />
      </Fragment>
    );
  }
}
