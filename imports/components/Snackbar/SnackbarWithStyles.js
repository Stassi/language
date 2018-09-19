import { withStyles } from '@material-ui/core/styles';
import Snackbar from './Snackbar';

const styles = theme => ({
  closeIcon: {
    height: theme.spacing.unit * 4,
    width: theme.spacing.unit * 4,
  },
  snackbar: { position: 'fixed' },
  snackbarContent: { width: 360 },
});

export default withStyles(styles)(Snackbar);
