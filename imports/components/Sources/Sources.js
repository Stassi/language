import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.func.isRequired,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

function Sources({ children, sources }) {
  return (
    <Fragment>
      {children(sources)}
    </Fragment>
  );
}

Sources.propTypes = propTypes;

export default Sources;
