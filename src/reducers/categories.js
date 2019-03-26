
const SUBMIT_CATEGORIES = "SUBMIT_CATEGORIES";
const SELECT_CATEGORY = "SELECT_CATEGORY";


const initialState={
	
	data: [] ,
	selected: "none",

	

}
export const categories = (state = initialState, action)=>{
	switch(action.type){

	case SUBMIT_CATEGORIES:
		return {...state, data: action.categories}

	case SELECT_CATEGORY:
		return {...state, selected: action.category}
	
	default :
		return state;
	}
}

