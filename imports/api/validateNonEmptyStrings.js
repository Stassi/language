import { check, Match } from 'meteor/check';

const validateNonEmptyStrings = x => x.forEach(y => check(
  y,
  Match.Where(() => check(y, String) || y.length > 0),
));

export default validateNonEmptyStrings;
