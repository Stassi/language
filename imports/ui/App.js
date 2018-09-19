import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  AppBar,
  FloatingActionButton,
  FormDialog,
  Snackbar,
} from '../components';
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
          handleClicked: noOp,
          selected: emptyArray,
        }}
      />

      <Snackbar>
        {({ notify, open }) => (
          <FormDialog
            {...{
              notify,
              button: <FloatingActionButton moveUp={open} />,
              dialogTitle: 'Add source text',
            }}
          />
        )}
      </Snackbar>
    </Fragment>
  );
}
