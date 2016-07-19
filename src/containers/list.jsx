import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import ListItem from './list-item.jsx';

const List = React.createClass({
render() {
		return (
			<div>
				{this.props.data.map((i)=> <ListItem key={i.id} id={i.id} name={i.name} mob={i.mobile}/>)}
			</div>
		)
	}
});

function mapStateToProps(state) {
    return {
    	data: state.list
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ 
    	}, dispatch); 
  }
export default connect(mapStateToProps,matchDispatchToProps)(List);
