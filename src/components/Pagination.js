import React, { PropTypes, Component } from 'react'

export default class Pagination extends Component {

  constructor(props){
      super(props);
      this.state = {
          options : this.props.options
      }
  }

  render() {
    const arr = [1, '...', 5, 6, this.state.options.current, 8, 9, '...', this.state.options.total]
    const list = arr.map((el, i) => <span key={i} className={el != '...' ? el == this.state.options.current ? 'span current' : 'span' : ''}>{el}</span>)
    return <div className='pagination'>{list}</div>
  }

}

Pagination.propTypes = {
  options: PropTypes.object.isRequired
}