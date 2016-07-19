import { combineReducers } from 'redux';

export const handleForm = (state = 	{	name: "",	mobile: ""},
	action) =>{
	switch(action.type){
		case 'NAME_CHANGE':
			console.log("On name change ==> ", action.newValue)
			let _name = Object.assign({}, state ,{name:action.newValue} )
			return _name
		break;
		
		case 'MOB_CHANGE':
			let _mob = Object.assign({}, state ,{mobile:action.newValue} )
			return _mob
		break;
		
		
		case 'CLEAR_FORM':
			return { name: "",	mobile: ""};
		break;
		}
	
return state;
};
export default handleForm;