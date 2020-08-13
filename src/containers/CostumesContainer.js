import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import {fetchCostumes} from '../actions/fetchCostumes'
import {fetchCategories} from '../actions/fetchCategories'
import CostumeInput from '../components/CostumeInput'
import Costumes from '../components/Costumes'
import Costume from '../components/Costume'


class CostumesContainer extends React.Component {
    
    //connect function to redux store
    componentDidMount(){
        this.props.fetchCostumes()
        this.props.fetchCategories()
    }

//conditionally rendered based on url - switch imported - order matters
//router props helpful props like location/route/path/params
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/costumes/new' render={(routerProps) => <CostumeInput {...routerProps} categories={this.props.categories}/> } />
                    <Route exact path='/costumes/:id' render={(routerProps) => <Costume {...routerProps} costumes={this.props.costumes}/> } />
                    <Route exact path='/costumes' render={(routerProps) => <Costumes {...routerProps} costumes={this.props.costumes}/> } />
                </Switch>
            </div>
        )
    }
}

//to see info use mapStateToProps
//give this access to these props
const mapStateToProps = state => {
    return {
        costumes: state.costumeState.costumes,
        categories: state.categoryState.categories
    }
}

export default connect(mapStateToProps, {fetchCostumes, fetchCategories})(CostumesContainer)