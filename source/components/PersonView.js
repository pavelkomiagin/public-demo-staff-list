import React, { Component, PropTypes } from 'react'

export default class PersonView extends Component {
	render() {
		const { fname, lname, id, role, avatar, desc } = this.props

		return <div data-id={id} className='person'>
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
		</div>
	}
}

PersonView.PropTypes = {
	fname: PropTypes.string.isRequired,
	lname: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
}
