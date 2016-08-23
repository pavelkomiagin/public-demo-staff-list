import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActions from '../actions/modalActions'

import Header from './Header'

class Modal extends Component {
	savePerson(e) {
		e.preventDefault()

		const form = e.target
		const newPerson = {
			id: form.querySelector('input[name="id"]').value,
			fname: form.querySelector('input[name="fname"]').value,
			lname: form.querySelector('input[name="lname"]').value,
			role: form.querySelector('input[name="role"]').value,
			avatar: form.querySelector('input[name="avatar"]').value,
			desc: form.querySelector('textarea[name="desc"]').value
		}
		this.props.modalActions.closeModal()
		this.props.saveAction(newPerson)

	}
	closeModal(e) {
		e.preventDefault()
		this.props.modalActions.closeModal()
	}

	render() {
		const { visible } = this.props.modal
		const { header } = this.props

		let id = this.props.hasOwnProperty('userData') ? this.props.userData.id : ''
		let fname = this.props.hasOwnProperty('userData') ? this.props.userData.fname : ''
		let lname = this.props.hasOwnProperty('userData') ? this.props.userData.lname : ''
		let role = this.props.hasOwnProperty('userData') ? this.props.userData.role : ''
		let desc = this.props.hasOwnProperty('userData') ? this.props.userData.desc : ''
		let avatar = this.props.hasOwnProperty('userData') ? this.props.userData.avatar : ''

		return <div className={`overlay ${visible ? '-visible' : ''}`}>
			<div className='overlay__shadow'></div>
			<div className='overlay__container'>
				<div className='modal'>
					<Header>{header}</Header>
					<div onClick={::this.closeModal} className='modal__close'>
						<svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
							<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/>
							<path d='M0 0h24v24H0z' fill='none'/>
						</svg>
					</div>
					<div className='modal__content'>
						<form onSubmit={::this.savePerson}>
							<input defaultValue={id} type='hidden' name='id' />
							<input defaultValue={avatar} type='hidden' name='avatar' />
							<input defaultValue={lname} name='lname' placeholder='Фамилия' type='text'/>
							<input defaultValue={fname} name='fname' placeholder='Имя' type='text'/>
							<input defaultValue={role} name='role' placeholder='Должность' type='text'/>
							<textarea defaultValue={desc} name='desc' placeholder='Описание'></textarea>
							<div className='modal__btns'>
								<button onClick={::this.closeModal} type='reset'>Отменить</button>
								<button type='submit'>Сохранить</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	}
}

function mapStateToProps(state) {
	return {
		list: state.list,
		modal: state.modal
	}
}
function mapDispatchToProps(dispatch) {
	return {
		modalActions: bindActionCreators(modalActions, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal)
