import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  AppBar,
  CheckboxList,
  FloatingActionButton,
  FormDialog,
  PaperSheet,
  Snackbar,
  Sources,
} from '../components';
import sourcesToCollection from './sourcesToCollection';
import './fonts/Roboto.css';

export default function App() {
  return (
    <Fragment>
      <CssBaseline />

      <Sources>
        {sources => (
          <PaperSheet moveDown>
            <CheckboxList collection={sourcesToCollection(sources)}>
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
          </PaperSheet>
        )}
      </Sources>

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
