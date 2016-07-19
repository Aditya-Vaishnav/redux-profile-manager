import React from 'react';
import Form from '../containers/form.jsx';
import ProfileList from '../containers/profileList.jsx';

class App extends React.Component {
  render() {
    return (
      <table className = 'noStyling' >
      	<tbody>
       		<tr>
       			<td> 
       				<Form/>
         		</td>
         		<td>
         		  <ProfileList/>
       			</td>
       		</tr>
       	</tbody>
        </table>
      );
  }
}

export default App;