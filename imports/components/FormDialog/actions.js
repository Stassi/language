import { Meteor } from 'meteor/meteor';

const close = () => ({ isOpen: false });
const open = () => ({ isOpen: true });

const insertSource = ({ content, title }) => new Promise((resolve, reject) => {
  Meteor.call(
    'sources.insert',
    { content, title },
    (error, result) => {
      if (error) reject(error);
      else resolve(result);
    },
  )
});

export {
  close,
  insertSource,
  open,
}
