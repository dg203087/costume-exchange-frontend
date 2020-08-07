import React from 'react';
import CostumesContainer from './containers/CostumesContainer'
import CategoriesContainer from './containers/CategoriesContainer';
import NavigationBar from './components/NavigationBar'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <CategoriesContainer />
        <CostumesContainer />
      </div>
    )
  }
}

export default (App)
