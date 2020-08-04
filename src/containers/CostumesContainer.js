import React from 'react'
import { connect } from 'react-redux'

import {fetchCostumes} from '../actions/fetchCostumes'
import CostumeInput from '../components/CostumeInput'
import Costumes from '../components/Costumes'


class CostumesContainer extends React.Component {
    //connect function to redux store
    componentDidMount(){
        this.props.fetchCostumes()
    }

    render() {
        return (
            <div>
                <CostumeInput />
                <Costumes costumes={this.props.costumes} />
            </div>
        )
    }
}

//to see info use mapStateToProps
//give this access to these props
const mapStateToProps = state => {
    return {
        costumes: state.costumes
    }
}


export default connect(mapStateToProps, {fetchCostumes})(CostumesContainer)