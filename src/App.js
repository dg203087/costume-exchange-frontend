import React from 'react';
import CostumesContainer from './containers/CostumesContainer'
import NavigationBar from './components/NavigationBar'
import './App.css'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <CostumesContainer />
      </div>
    )
  }
}

export default (App)
