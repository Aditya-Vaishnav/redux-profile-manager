import React from 'react';
import Form from '../containers/form.jsx';
import List from '../containers/list.jsx';

class App extends React.Component {
  render() {
    return (
      <table className='noStyling'>
      	<tbody>
       		<tr>
       			<td> 
       				<Form/>
         		</td>
         		<td>
         		  <List/>
       			</td>
       		</tr>
       	</tbody>
        </table>
      );
  }
}

export default App;