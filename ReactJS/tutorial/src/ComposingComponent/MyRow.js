import React, {Component} from 'react'

export default class MyRow extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>
            </tr>
        )
    }
}