import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import SourcesAPI from '../../api/Sources';
import Sources from './Sources';

export default withTracker(() => {
  Meteor.subscribe('sources.all');

  return {
    sources: SourcesAPI.find(
      {},
      {
        sort: { createdAt: -1 },
      },
    ).fetch(),
  };
})(Sources);
