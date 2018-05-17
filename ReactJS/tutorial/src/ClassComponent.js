import React, {Component} from 'react'
import MyTable from './ComposingComponent/MyTable'

export class App extends Component{
    render(){
        return(
            <div>
                <Title title="Welcome to the table"/>
                <MyTable/>
            </div>
        )
    }
}

function Title(props){
    return(
        <div>
            <strong>TITLE: {props.title}</strong>
        </div>
    )
}

// Default export App
/**
 * if use export default, when 'import <something> from ClassComponent'
 * it always use App
 */
// export default App;

/**
 * if use export <something>
 * must use 'import {<something>} from ClassComponent'
 */