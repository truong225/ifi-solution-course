import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import Board from './Board'

class Game extends React.Component{
    constructor(){
        super()
        this.state={
            squares:Array(9).fill(null)
            // State la 1 mang array gom 9 phan tu null
        }
    }

    render(){
        return(
            <div>
                <div className="game">
                    <Board passed_squares={this.state.squares}/>
                </div>
            </div>
        )
    }
}

export default Game