import React, { Component, PropTypes } from 'react'

export default class Button extends Component {

	render() {
		const { children, color } = this.props

		return <div onClick={this.props.onClick} className={`btn ${color ? '-'+color : ''}`}>
			<span className='btn__value'>
				{children}
			</span>
		</div>
	}
}

Button.PropTypes = {
	children: PropTypes.string.isRequired,
	color: PropTypes.string
}
