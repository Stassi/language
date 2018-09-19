const deselect = () => ({ selected: [] });

const isSelected = ({ id, selected }) => !!selected.find(x => x === id);

const handleToggle = id => ({ selected }) => ({
  selected: isSelected({ id, selected })
    ? selected.filter(x => x !== id)
    : [...selected, id],
});

export {
  deselect,
  handleToggle,
  isSelected,
};
