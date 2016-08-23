import {
	CLOSE_MODAL,
	OPEN_MODAL
} from '../constants/modal'

const initialState = {
	visible: false,
	editableUser: {}
}

export default function modal(state = initialState, action) {
	switch(action.type) {
		case CLOSE_MODAL:
			return { ...state, visible: false }

		case OPEN_MODAL:
			return { ...state, visible: true }

		default:
			return state
	}
}
