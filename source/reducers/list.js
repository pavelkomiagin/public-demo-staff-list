import {
	UPLOAD_STAFFLIST_SUCCESS,
	UPLOAD_STAFFLIST_BEGIN,
	UPLOAD_STAFFLIST_ERROR,
	SORT_STAFF_LIST,
	EDIT_PERSON_OPEN,
	ADD_PERSON,
	EDIT_PERSON
} from '../constants/list'

const initialState = {
	sort: 'lname',
	items: [],
	loading: false,
	lastUsedId: 5,
	editablePerson: {}
}

function editPerson(state, action) {
	switch (action.type) {
		case EDIT_PERSON:
			if( action.payload.id == state.id ) {
				return action.payload
			} else {
				return state
			}

		default:
			return state
	}
}

export default function list(state = initialState, action) {
	switch(action.type) {
		case UPLOAD_STAFFLIST_SUCCESS:
			return { ...state, loading: false, items: action.payload }

		case UPLOAD_STAFFLIST_BEGIN:
			return { ...state, loading: true }

		case UPLOAD_STAFFLIST_ERROR:
			return { ...state, loading: false, error: action.error }

		case SORT_STAFF_LIST:
			return { ...state, sort: action.payload }

		case EDIT_PERSON_OPEN:
			return { ...state, editablePerson: state.items.find( (item) => { return item.id == action.payload } ) }

		case EDIT_PERSON:

			return { ...state, items: state.items.map( item => {
				return editPerson(item, action)
			} ), editablePerson: action.payload }

		case ADD_PERSON:
			return { ...state, items: [...state.items, {
				id: state.lastUsedId + 1,
				fname: action.payload.fname,
				lname: action.payload.lname,
				role: action.payload.role,
				desc: action.payload.desc,
				avatar: 'https://habracdn.net/mk/assets/defaults/avatars/medium_male_default-c205ae1bb0815f0e7044f60f82f7e613.png'
			}], lastUsedId: state.lastUsedId + 1 }

		default:
			return state
	}
}
