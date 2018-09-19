import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import collection from './collection';
import validateNonEmptyStrings from './validateNonEmptyStrings';

const { name, method } = collection('sources');
const Sources = new Mongo.Collection(name);

if (Meteor.isServer) {
  Meteor.publish(
    method('all'),
    () => Sources.find(),
  );
}

Meteor.methods({
  [method('insert')]({ content, title }) {
    validateNonEmptyStrings([content, title]);

    return new Promise((resolve, reject) => {
      Sources.insert(
        {
          content,
          title,
          createdAt: new Date(),
        },
        (error, id) => {
          if (error) reject(error);
          else resolve(id);
        },
      );
    })
  }
});

export default Sources;
