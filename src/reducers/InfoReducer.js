import data from './News.json';

const INITIAL_STATE = {
  topMode:      "",
  topText:      "",
  selectedList: [],
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "setTopMode":
      return{ ...state, topMode: action.payload }
    case "setTopText":
      return{ ...state, topText: action.payload }
    case "setSelectedList":
      return{ ...state, selectedList: action.payload}

    default:
      return state;
  }
};
