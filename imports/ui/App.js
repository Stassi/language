import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  AppBar,
  CheckboxList,
  FloatingActionButton,
  FormDialog,
  Snackbar,
} from '../components';
import './fonts/Roboto.css';

export default function App() {
  return (
    <Fragment>
      <CssBaseline />

      <CheckboxList>
        {({ deselect, selected }) => (
          <AppBar
            {...{
              selected,
              handleClicked: key => ({
                deselect,
                action: () => {
                  // TODO: Implement
                  // eslint-disable-next-line no-console
                  console.log({ action: true });
                },
              })[key],
              title: 'Sources',
            }}
          />
        )}
      </CheckboxList>

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
