import { withStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';

const styles = {
  flex: { flexGrow: 1 },
  displayNone: { display: 'none' },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  root: { flexGrow: 1 },
};

export default withStyles(styles)(AppBar);
