import React from 'react';
import CostumesContainer from './containers/CostumesContainer'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

import './App.css'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <CostumesContainer />
        <Footer />
      </div>
    )
  }
}

export default (App)
