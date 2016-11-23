import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import Table from '../components/Table'
import * as pageActions from '../actions/PageActions'
import * as userActions from '../actions/UserActions'

class App extends Component {
  render() {
    const { user, page } = this.props
    const { setYear } = this.props.pageActions
    const { setUser } = this.props.userActions

    return <div className='row'>
      <Page photos={page.photos} year={page.year} setYear={setYear} setName={setUser} />
      <User name={user.name} />
      <Table data={ [{
        id: 1,
        name: "Nonachka"
      },{
        id: 2,
        name: "Kirill"
      },{
        id: 3,
        name: "Liza"
      }] } />
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
