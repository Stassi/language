import { withStyles } from '@material-ui/core/styles';
import FormDialog from './FormDialog';

const styles = theme => ({
  button: { margin: theme.spacing.unit },
  iconSmall: { fontSize: 20 },
  leftIcon: { marginRight: theme.spacing.unit },
});

export default withStyles(styles)(FormDialog);
