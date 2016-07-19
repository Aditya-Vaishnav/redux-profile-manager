import React from 'react';
import List from '../containers/list.jsx';
import { removeItem } from '../actions/actions.js';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';


const ListItem = React.createClass ({
   edit(){
      console.log("editing ==>", this.props.id)
   },
   remove(){
      this.props.removeItem(this.props.id)
   },
   render() {
      return (
         <div>
           <table>
         			<tbody>
         				<tr>
         					<th> Profile # {this.props.id + 1} </th>
         				</tr>
         				<tr>
         					<td>{this.props.name}</td>
         				</tr>
                     <tr>
                        <td>{this.props.mob}</td>
                     </tr>
                     <tr>
                        <td><button onClick = {this.edit} > Edit #{this.props.id+1}</button></td>
                     </tr>
                     <tr>
                        <td><button onClick = {this.remove} > Remove #{this.props.id+1}</button></td>
                     </tr>
         			</tbody>
         		</table>
         </div>

      );
   }
});
function mapStateToProps(state) {
    return {
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
      removeItem
    }, dispatch); 
  }
export default connect(mapStateToProps,matchDispatchToProps)(ListItem);