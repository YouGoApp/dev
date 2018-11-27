const pageDefault = {
	page: 1,
	numPeople: "",
	listRest: "",
	distance: "",
	result: [],
	searchUrl: '',
	selectedIndex: 0
};

export function Page(state = pageDefault, action) {
	let obj = Object.assign({}, state);

	switch (action.type) {
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

		case "CHANGE_REST":
			obj.result = action.result;
			return obj;
		case 'CHANGE_SEARCH_URL':
			obj.searchUrl = action.searchUrl;
			return obj;
		case 'SET_SELECTED_INDEX':
			obj.selectedIndex = action.selectedIndex;
			return obj;

		default:
			return state;
	}
}
