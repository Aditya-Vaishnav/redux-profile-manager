import React from 'react';
import { connect } from 'react-redux';
import { nameChanged, mobileChanged, saveOrEdit, clearForm } from '../actions/actions.js';
import {bindActionCreators} from 'redux';
const Form = React.createClass({
	onSubmit(){
		this.props.saveOrEdit(this.props.data)
		this.props.clearForm()
	},
	onNameChange(e) {
		this.props.nameChanged(e.target.value)
	},
	onMobChange(e) {
		this.props.mobileChanged(e.target.value)
	},

render() {
		return (
			<table>
				<tbody>
					<tr>
						<td> Name </td>
						<td> <input type = "text" placeholder = "Enter your name" onChange = { this.onNameChange } value = {this.props.data.name}/> </td>
					</tr>
					<tr>
						<td> Mobile </td>
						<td> <input type = "text" placeholder = "Enter mobile number" onChange = { this.onMobChange } value = {this.props.data.mobile}/></td>
					</tr>
					<tr>
						<td colSpan = "2" > <input type = "submit" onClick = { this.onSubmit } /></td>
					</tr>
				</tbody>
			</table>
		)
	}
});

function mapStateToProps(state) {
    return {
    	data: state.form
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
    	nameChanged,
    	mobileChanged,
    	saveOrEdit,
    	clearForm
    }, dispatch); 
  }
export default connect(mapStateToProps,matchDispatchToProps)(Form);
