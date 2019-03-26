const SUBMIT_PAYMENT = "SUBMIT_PAYMENT";
const BACK_TO_PAYMENT = "BACK_TO_PAYMENT";

const initialState={
	data: {payment_method: 'Credit Card', card_number: '', cvv: '', date: ''},
	submitted: false,

}

export const payment = (state = initialState, action)=>{
	switch(action.type){
		case SUBMIT_PAYMENT:
			return{...state, data: action.data, submitted: true}
		case BACK_TO_PAYMENT:
			return {...state, submitted: false}
		default :
			return state;
	}
}