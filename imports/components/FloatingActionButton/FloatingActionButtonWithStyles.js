import { withStyles } from '@material-ui/core/styles';
import FloatingActionButton from './FloatingActionButton';

const styles = theme => ({
  fab: {
    bottom: theme.spacing.unit * 2,
    position: 'fixed',
    right: theme.spacing.unit * 2,
  },
  fabMoveDown: {
    transform: 'translate3d(0, 0, 0)',
    transition: theme.transitions.create(
      'transform',
      {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      },
    ),
  },
  fabMoveUp: {
    transform: 'translate3d(0, -46px, 0)',
    transition: theme.transitions.create(
      'transform',
      {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.easeOut,
      },
    ),
  },
});

export default withStyles(styles)(FloatingActionButton);
