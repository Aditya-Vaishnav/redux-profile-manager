import { combineReducers } from 'redux';

export const list = (state=[],action) =>{
	switch(action.type){
		case 'SAVE_OR_EDIT':
			if(state.hasOwnProperty('id')){
				// Edit 
				console.log("in edit mode with ==> ", action.data)
			} else {
				// Save new data with id
				const _state = [...state,	{ 
				id: state.length, 
				name: action.data.name,			
				mobile: action.data.mobile
			}]
			return _state
			}	
		break;
		
		case "REMOVE_ITEM":
			console.log("Id is ", action.itemId)
			let newstate = []
			state.map( (item) => {
				if(item.id != action.itemId) {
					newstate.push(item)
					console.log("Adding" , item.id)
				}	
				else
					console.log("removing" , item.id)
			})
			return newstate
				//return state.splice(action.itemId,1)
		break;
	}
return state;
};
export default list;