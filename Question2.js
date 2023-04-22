/*



QUESTION  2 : What problems / warnings are there with code?


There are a few problems and warnings with given code in assigment:

The setSelectedIndex should be const [selectedIndex, setSelectedIndex] = useState(); as the useState


The items prop in the WrappedListComponent is defined as items: PropTypes.array(PropTypes.shape({...})), which is not a valid PropTypes definition. It should be defined as items: PropTypes.arrayOf(PropTypes.shape({...})) instead.
The isSelected prop in the SingleListItem component is expected to be a boolean, but it's passed the selectedIndex state variable which is a number. The isSelected prop should be defined as isSelected={selectedIndex === index} instead.
The onClickHandler function in the SingleListItem component is called with the index prop as argument when the li element is clicked. This will cause the function to be called immediately on render instead of on click. The onClickHandler prop should be defined as onClickHandler={() => onClickHandler(index)} instead.


*/