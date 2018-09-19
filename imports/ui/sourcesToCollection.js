const sourcesToCollection = sources =>
  sources.map(({ title, _id: id }) => ({ id, title }));

export default sourcesToCollection;
