import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const styles={
    app:{
        fontWeight:'bold',
        color:'#999999'
    }
}

/**
 * Should be like this
 */
class App extends Component{
    render(){
        return (
            <h1 style={styles.app}>Hello world</h1>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);