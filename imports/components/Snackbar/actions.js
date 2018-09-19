const close = () => ({ open: false });

const notify = message => () => ({
  message,
  open: true,
});

export { close, notify };
