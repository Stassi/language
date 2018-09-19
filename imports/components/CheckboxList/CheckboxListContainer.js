import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CheckboxList from './CheckboxList';
import {
  deselect,
  handleToggle,
  isSelected,
} from './actions';

export default class CheckboxListContainer extends Component {
  state = { selected: [] };

  static propTypes = { children: PropTypes.func.isRequired };

  render() {
    const {
      props,
      state,
      props: { children },
      state: { selected },
    } = this;

    return (
      <Fragment>
        {children({
          selected,
          deselect: () => this.setState(deselect),
        })}

        <CheckboxList
          {...{
            actions: {
              isSelected,
              handleToggle: id => this.setState(handleToggle(id)),
            },
            ...props,
            ...state,
          }}
        />
      </Fragment>
    );
  }
}
