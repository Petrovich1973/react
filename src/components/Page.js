import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
  constructor(props){
      super(props);
      this.state = {
          input_value : 'Новое имя'
      }
  }
  onYearBtnClick(e) {
    this.props.setYear(+e.target.innerText)
    this.props.setName(e.target.innerText)
  }
  onNameBtnClick(e) {
    this.props.setName(e.target.value)
    this.setState({input_value: e.target.value})
  }
  render() {
    const { year, photos } = this.props    
    return <div className='ib page'>
      <div>
        <button className='btn' onClick={::this.onYearBtnClick}>2036</button>{' '}
        <button className='btn' onClick={::this.onYearBtnClick}>2015</button>{' '}
        <button className='btn' onClick={::this.onYearBtnClick}>2014</button>{' '}
        
        <input className='btn text' type={'text'} value={this.state.input_value} onChange={::this.onNameBtnClick} />
      </div>
      <h3>{year} год</h3>
      <p>У тебя {photos.length} фото.</p>
    </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired
}
