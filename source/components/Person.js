import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Person extends Component {
	onPersonClick(e) {
		const id = e.currentTarget.getAttribute('data-id')
		this.props.editPerson(id)
	}

	render() {
		const { fname, lname, id, role, avatar, desc } = this.props

		return <Link to={`/profile/${id}`} data-id={id} onClick={::this.onPersonClick} className='person' id={`person-${id}`}>
			<div className='person__avatar'>
				<img src={avatar} alt={`${fname} ${lname}`}/>
			</div>
			<div className='person__content'>
				<div className='person__name'>
					<span>{lname}&nbsp;</span>
					<span>{fname}</span>
				</div>
				<div className='person__role'>{role}</div>
				<div className='person__desc'>{desc}</div>
			</div>
		</Link>
	}
}

Person.PropTypes = {
	fname: PropTypes.string.isRequired,
	lname: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
}
