import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from '../actions/listActions'
import * as modalActions from '../actions/modalActions'
import Person from '../components/Person'
import Header from '../components/Header'
import Button from '../components/Button'
import Modal from '../components/Modal'

class List extends Component {
	constructor() {
		super()
		this.state = {
			viewStyle: 'list'
		}
	}

	onViewStyleClick(evt) {
		let nextState = evt.currentTarget.getAttribute('data-viewStyle')
		this.setState({viewStyle: nextState})
	}

	onSortLabelClick(evt) {
		let attr = evt.target.getAttribute('data-sort-field')
		this.props.listActions.sortStaffList(attr)
	}
	componentDidMount() {
		if( this.props.list.items.length == 0 ) this.props.listActions.getStaffList()
	}
	render() {
		const { sort, items } = this.props.list
		const { editPerson } = this.props.listActions
		const { openModal, savePerson } = this.props.modalActions
		const listClassName = this.state.viewStyle == 'list' ? 'list__items' : 'list__items -grid'

		let displayItems = function(filter, items){
			let sortBy = filter == 'default' ? 'id' : filter

			return items.sort((a,b) => {
				let av = typeof(a[sortBy]) === 'string' ? a[sortBy][0].toLowerCase() : a[sortBy]
				let bv = typeof(b[sortBy]) === 'string' ? b[sortBy][0].toLowerCase() : b[sortBy]
				return av > bv ? 1 : -1
			})
		}(sort, items)

		return <div>
			<Modal saveAction={savePerson} header='Добавить сотрудника' />
			<Header>
				Список сотрудников отдела разработки
				<Button onClick={openModal}>Добавить сотрудника</Button>
			</Header>
			<article className='list'>
				<div className='list__sort'>
					<div className='sort'>
						<div className='sort__items'>
							<span className='sort__label'>Сортировать по:</span>
							<span
								className={sort === 'lname' ? 'sort__item -selected' : 'sort__item'}
								onClick={::this.onSortLabelClick}
								data-sort-field='lname'>
								фамилии
							</span>
							<span
								className={sort === 'fname' ? 'sort__item -selected' : 'sort__item'}
								onClick={::this.onSortLabelClick}
								data-sort-field='fname'>
								имени
							</span>
							<span
								className={sort === 'role' ? 'sort__item -selected' : 'sort__item'}
								onClick={::this.onSortLabelClick}
								data-sort-field='role'>
								должности
							</span>
						</div>
						<div className='sort__views'>
							<span className='sort__view -list'>
								<svg className={this.state.viewStyle == 'list' ? '-selected' : ''} onClick={::this.onViewStyleClick} data-viewStyle='list' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
									<path d='M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z'/>
									<path d='M0 0h24v24H0z' fill='none'/>
								</svg>
							</span>
							<span className='sort__view -grid'>
								<svg className={this.state.viewStyle == 'grid' ? '-selected' : ''} onClick={::this.onViewStyleClick} data-viewStyle='grid' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
									<path d='M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z'/>
									<path d='M0 0h24v24H0z' fill='none'/>
								</svg>
							</span>
						</div>
					</div>
				</div>
				<section className={listClassName}>
					{
						displayItems.map( (item, index) => {
							return <Person editPerson={editPerson} key={index} {...item} />
						} )
					}
				</section>
			</article>
		</div>
	}
}

List.PropTypes = {
	sort: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
	editablePerson: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(List)
