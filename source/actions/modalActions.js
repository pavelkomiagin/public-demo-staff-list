import {
	ADD_PERSON,
	CLOSE_MODAL,
	OPEN_MODAL,
	EDIT_PERSON
} from '../constants/modal'

export function savePerson(personObj) {
	return {
		type: ADD_PERSON,
		payload: personObj
	}
}
export function editPerson(personObj) {
	return {
		type: EDIT_PERSON,
		payload: personObj
	}
}

export function closeModal() {
	return {
		type: CLOSE_MODAL
	}
}

export function openModal() {
	return {
		type: OPEN_MODAL
	}
}
