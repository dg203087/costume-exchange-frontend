import React from 'react';
// import { connect } from 'react-redux'
import CostumesContainer from './containers/CostumesContainer'
// import { fetchCostumes } from './actions/fetchCostumes'
import './App.css';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <CostumesContainer />
      </div>
    )
  }
}


//update store directly from component - give access to this.props.fetchCostumes
//essentially calling store.dispatch on fetchCostumes()
export default (App)
