import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import { connect } from 'react-redux'
import fetchCats from './actions/catActions'

class App extends Component {

  componentDidMount(){
    this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats.pictures
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
