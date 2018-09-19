const collection = name => ({
  name,
  method: method => `${name}.${method}`,
});

export default collection;
