import { withStyles } from '@material-ui/core/styles';
import PaperSheet from './PaperSheet';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
  },
  marginTop: { marginTop: theme.spacing.unit * 6 },
});

export default withStyles(styles)(PaperSheet);
