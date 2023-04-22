/*
Question 3:  Please fix, optimize, and/or modify the component as much as you think is necessary.



Solution:
  

In this optimized code, the SingleListItem component is defined as a memoized component that receives the necessary props.

The List component is also defined as a memoized component that receives the items prop as an array of objects with a text property. The useEffect hook is used to reset the selectedIndex state variable to null whenever the items prop changes.

The handleClick function updates the selectedIndex state variable when a SingleListItem is clicked.

The SingleListItem component is modified to fix the issues with the isSelected prop and the onClickHandler prop.

Finally, the List component's PropTypes are also updated to fix the issue with the items prop.*/



import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const SingleListItem = memo(({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red' }}
      onClick={() => onClickHandler(index)}
    >
      {text}
    </li>
  );
});

SingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

// List Component
const List = memo(({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          key={index}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index}
        />
      ))}
    </ul>
  );
});

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default List;


