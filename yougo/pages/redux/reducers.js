const pageDefault = {
	page: 1,
	numPeople: "",
	listRest: "",
	distance: "",
  restName: "",
  restRating: "",
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
      
    case "CHANGE_REST_NAME":
			obj.restName = action.restName;
			return obj;
		
    case "CHANGE_REST_RATING":
			obj.restRating = action.restRating;
			return obj;  
      
		default:
			return state;
	}
}