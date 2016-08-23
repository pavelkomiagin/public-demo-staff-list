import React, { Component, PropTypes } from 'react'

export default class Header extends Component {

	render() {
		const { children, color } = this.props

		return <h1 className={`header ${color ? '-'+color : ''}`}>{children}</h1>
	}
}

Header.PropTypes = {
	children: PropTypes.string.isRequired,
	color: PropTypes.string
}
