import React, {Component} from 'react'
import MyRow from './MyRow'

class MyTable extends Component{
    constructor(props){
        super(props)
        this.state={
            lists:[
                {name:'truong',age:'22'},
                {name:'admin',age:'19'}
            ]
        }
    }

    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.lists.map(list=>{
                        return <MyRow name={list.name}
                            age={list.age}/>
                    })}
                </tbody>
            </table>
        )
    }
}

export default MyTable