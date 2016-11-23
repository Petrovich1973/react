import React, { PropTypes, Component } from 'react'

export default class Table extends Component {
  render() {
    const { datas } = this.props
    const tbody = datas.map(el => <tr key={el.id}><td>{el.id}</td><td>{el.name}</td></tr> )
    return <table className="table">
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
  datas: PropTypes.array.isRequired
}