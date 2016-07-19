import { combineReducers } from 'redux';

export const list = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT':
      if (action.data.hasOwnProperty('id')) {
        let newstate = []
        state.map((item) => {
          if (item.id != action.data.id)
            newstate.push(item)
          else
            newstate.push(action.data)
        })
        return newstate
      } else {
        const _state = [...state, {
          id: state.length,
          name: action.data.name,
          mobile: action.data.mobile
        }]
        return _state
      }
      break;

    case "REMOVE_PROFILE":
      console.log("Id is ", action.itemId)
      let newstate = []
      state.map((item) => {
        if (item.id != action.itemId) {
          newstate.push(item)
          console.log("Adding", item.id)
        } else
          console.log("removing", item.id)
      })
      return newstate
      break;
  }
  return state;
};
export default list;
