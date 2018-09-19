import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar } from '../components';
import './fonts/Roboto.css';

// TODO: Remove placeholders
const emptyArray = [];
const noOp = () => {};

export default function App() {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar
        {...{
          selected: emptyArray,
          handleClicked: noOp,
        }}
      />
    </Fragment>
  );
}
