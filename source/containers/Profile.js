import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from '../actions/listActions'
import * as modalActions from '../actions/modalActions'
import Header from '../components/Header'
import PersonView from '../components/PersonView'
import Button from '../components/Button'
import Modal from '../components/Modal'
import { Link } from 'react-router'

class Profile extends Component {

	render() {
		const { lname, fname } = this.props.list.editablePerson
		const { openModal, editPerson } = this.props.modalActions

		return <div>
			<article className='profile'>
				<Modal userData={this.props.list.editablePerson} saveAction={editPerson} header='Редактирование сотрудника' />
				<Header color='green'>{`Профиль пользователя ${lname} ${fname}`}<Button onClick={openModal}>Редактировать</Button></Header>
				<div className='profile__back'>
					<Link to='/'>К списку сотрудников</Link>
				</div>
				<PersonView {...this.props.list.editablePerson} />
			</article>
		</div>
	}
}
function mapStateToProps(state) {
	return {
		list: state.list
	}
}
function mapDispatchToProps(dispatch) {
	return {
		listActions: bindActionCreators(listActions, dispatch),
		modalActions: bindActionCreators(modalActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
