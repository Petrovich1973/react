import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import Table from '../components/Table'
//import Pagination from '../components/Pagination' <Pagination options={{total: 45, current: 7}} />
import * as pageActions from '../actions/PageActions'
import * as userActions from '../actions/UserActions'


import Pagination from 'rc-pagination'
import Select from 'rc-select'


class App extends Component {

  constructor(props){
      super(props);
      this.state = {
          pageSize: 20,
          pageSizeOptions: ['20', '50', '100'],
          current: 5,
          total: 5000
      }
  }

  onShowSizeChange(current, pageSize) {
    console.log(current, pageSize)
    this.setState({ pageSize, current })
  }

  render() {
    const { user, page, pageActions, userActions } = this.props
    const locale = {
      items_per_page: 'строк',
      jump_to: 'Перейти',
      page: '',
      prev_page: 'Назад',
      next_page: 'Вперед',
      prev_5: 'Предыдущие 5',
      next_5: 'Следующие 5'
    }
    return <div className='row'>
      <Page photos={page.photos} year={page.year} setYear={pageActions.setYear} setName={userActions.setUser} />
      <User name={user.name} />
      <Pagination
        locale={locale}
        selectComponentClass={Select}
        showSizeChanger={true}
        pageSize={this.state.pageSize}
        pageSizeOptions={this.state.pageSizeOptions}
        onShowSizeChange={::this.onShowSizeChange}
        defaultCurrent={this.state.current}
        total={this.state.total}
      />
      <Table datas={page.datas} data={page.data} />
      <Pagination
        locale={locale}
        selectComponentClass={Select}
        showSizeChanger={true}
        pageSize={this.state.pageSize}
        pageSizeOptions={this.state.pageSizeOptions}
        onShowSizeChange={::this.onShowSizeChange}
        defaultCurrent={this.state.current}
        total={this.state.total}
      />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
