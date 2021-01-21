const initialState = {
  chosenItems: [],
  totalSum: 0
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'REMOVE_FROM_TOTAL_SUM':
      return {
        ...state, 
        chosenItems: state.chosenItems.filter( (item, index) => index !== action.intruderIndex)
      };
      case 'SUBTRACT_FROM_TOTAL_SUM':
      return {
        ...state, 
        totalSum: state.totalSum - action.oldPrice
      };
  case 'ADD_TO_CHOSEN_ITEMS':
    return {
      ...state, 
      chosenItems: [...state.chosenItems, action.newItem]
    };
  case 'ADD_TO_TOTAL_SUM':
    return {
      ...state, 
      totalSum: state.totalSum + action.newPrice
    };
  default:
    return state;
  }
}