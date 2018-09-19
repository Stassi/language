import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  AppBar,
  FloatingActionButton,
  FormDialog,
} from '../components';
import './fonts/Roboto.css';

// TODO: Remove placeholders
const emptyArray = [];
const F = () => false;
const noOp = () => {};

export default function App() {
  return (
    <Fragment>
      <CssBaseline />

      <AppBar
        {...{
          handleClicked: noOp,
          selected: emptyArray,
        }}
      />

      <FormDialog
        {...{
          button: <FloatingActionButton moveUp={F()} />,
          notify: noOp,
        }}
      />
    </Fragment>
  );
}
