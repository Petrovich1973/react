import React, { PropTypes, Component } from 'react'

export default class Table extends Component {

  constructor(props){
      super(props);
      this.state = {
          table : this.props.datas.map( el => ({tr1:{id:el.id, name : el.name}, tr2:{ name : 465654, display : this.props.data }} )),
          datais : this.props.data
      }
  }

  onClHdl(i, e){
    this.state.table[i].tr2.display = !this.state.table[i].tr2.display;
    this.setState({table : this.state.table})
  }

  render() {
    const { datas, data } = this.props
    const tbody = this.state.table.map((el,i) => <tbody key={el.tr1.id} style={{background : el.tr2.display ? '#fafafa' : 'none'}}>
        <tr onClick={this.onClHdl.bind(this, i)}>
          <td>{el.tr2.display ? <i className="fa fa-angle-down" /> : <i className="fa fa-angle-right" />}</td>
          <td>{el.tr1.id}</td>
          <td>{el.tr1.name}</td>
        </tr>
        <tr style={{display : el.tr2.display ? 'table-row' : 'none'}}>
          <td></td>
          <td colSpan="2">{el.tr2.name} {this.state.datais ? 'true' : 'false'}</td>
        </tr>
      </tbody>
    )

    return <table className="table">
      	<thead>
      		<tr>
            <th></th>
            <th>Id</th>
      			<th>Name</th>
      		</tr>
      	</thead>
      	{tbody}
      </table>
  }
  
}

Table.propTypes = {
  datas: PropTypes.array.isRequired,
  data: PropTypes.bool.isRequired
}