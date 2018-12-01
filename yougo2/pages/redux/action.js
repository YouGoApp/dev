export function ChangePage(page){
	return{
		type:"CHANGE_PAGE",
		page:page
	}
}

export function ChangePeople(numPeople){
	return{
		type:"CHANGE_PEOPLE",
		numPeople:numPeople
	}
}

export function ChangeList(listRest){
	return{
		type:"CHANGE_LIST",
		listRest:listRest
	}
}

export function ChangeDistance(distance){
	return{
		type:"CHANGE_DISTANCE",
		distance:distance
	}
}

export function ChangeRest(result){
	return{
		type:"CHANGE_REST",
		result:result
	}
}

export function ChangeSearchUrl(searchUrl) {
	return {
		type: "CHANGE_SEARCH_URL",
		searchUrl: searchUrl
	}
}

export function SetSelectedIndex(selectedIndex) {
	return {
		type: "SET_SELECTED_INDEX",
		selectedIndex: selectedIndex
	}
}

export function SetSortIndex(sortIndex) {
	return {
		type: "SET_SORT_INDEX",
		sortIndex: sortIndex
	}
}

export function SetUser(user) {
	return {
		type: "SET_USER",
		user: user
	}
}
