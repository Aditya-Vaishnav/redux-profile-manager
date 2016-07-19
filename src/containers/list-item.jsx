import React from 'react';
import { removeProfile, editProfile } from '../actions/actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const ListItem = React.createClass ({
   edit() {
    const item = {
      id : this.props.id,
      name : this.props.name,
      mobile : this.props.mob
    }
    this.props.editProfile(item)
   },
   remove() {
      this.props.removeProfile( this.props.id )
   },
   render() {
      return (
         <div>
           <table>
         			<tbody>
         				<tr>
         					<th> Profile # { this.props.id + 1 } </th>
         				</tr>
         				<tr>
         					<td> { this.props.name } </td>
         				</tr>
                <tr>
                  <td> { this.props.mob } </td>
                </tr>
                <tr>
                  <td>  <button onClick = { this.edit } > Edit #{ this.props.id+1 }  </button>  </td>
                </tr>
                <tr>
                  <td>  <button onClick = { this.remove } > Remove #{ this.props.id+1 }  </button>  </td>
                </tr>
         			</tbody>
         		</table>
         </div>

      );
   }
});
function mapStateToProps ( state ) {
    return {
      data: state.list
    };
}

function matchDispatchToProps ( dispatch ) {
    return bindActionCreators ({
      removeProfile,
      editProfile
    }, dispatch); 
  }
export default connect( mapStateToProps , matchDispatchToProps )( ListItem );