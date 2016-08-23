import {
	UPLOAD_STAFFLIST_SUCCESS,
	UPLOAD_STAFFLIST_BEGIN,
	SORT_STAFF_LIST,
	EDIT_PERSON_OPEN
} from '../constants/list'

import $ from 'jquery'

export function getStaffList() {
	return (dispatch) => {
		dispatch({
			type: UPLOAD_STAFFLIST_BEGIN
		})

		$.ajax({
			url: '/stafflist.json',
			success: (data) => {
				dispatch({
					type: UPLOAD_STAFFLIST_SUCCESS,
					payload: data.items
				})
			}
		})
	}
}

export function sortStaffList(byField) {
	return {
		type: SORT_STAFF_LIST,
		payload: byField
	}
}

export function editPerson(id) {
	return {
		type: EDIT_PERSON_OPEN,
		payload: id
	}
}
