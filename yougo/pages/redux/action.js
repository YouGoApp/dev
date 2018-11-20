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

export function ChangeRestName(restName){
	return{
		type:"CHANGE_REST_NAME",
		restName:restName
	}
}

export function ChangeRestRating(restRating){
	return{
		type:"CHANGE_REST_RATING",
		restRating:restRating
	}
}