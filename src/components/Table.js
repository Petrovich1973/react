import React, { PropTypes, Component } from 'react'

export default class Table extends Component {
  render() {
    const { data } = this.props
    const tbody = data.map(el => <tr key={el.id}><td>{el.id}</td><td>{el.name}</td></tr> )
    return <table>
      	<thead>
      		<tr>
      			<th>Id</th>
      			<th>Name</th>
      		</tr>
      	</thead>
      	<tbody>{tbody}</tbody>
      </table>
  }
}

Table.propTypes = {
  data: PropTypes.array.isRequired
}