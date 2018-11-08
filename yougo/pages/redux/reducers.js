const pageDefault = {
	page: 1,
	numPeople: "",
	listRest: "",
	distance: ""
};

export function Page(state = pageDefault, action){
	let obj= Object.assign({}, state);
	
	switch(action.type){
		case "CHANGE_PAGE":
			obj.page = action.page;
			return obj;
			
		case "CHANGE_PEOPLE":
			obj.numPeople = action.numPeople;
			return obj;
			
		case "CHANGE_LIST":
			obj.listRest = action.listRest;
			return obj;
			
		case "CHANGE_DISTANCE":
			obj.distance = action.distance;
			return obj;
			
		default:
			return state;
	}
}