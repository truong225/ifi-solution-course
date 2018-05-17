import React from 'react'
import ReactDOM from 'react-dom'
import '../index.css'
import Square from './Square'

class Board extends React.Component{
    renderSquare(i){
        return <Square value={this.props.passed_squares[i]} onClick={()=>this.propsops.onClick(i)}/>
    }

    renderSquareBoard(){
        const boardSize=Math.sqrt(this.props.passed_squares.length)
        const board=Array(boardSize).fill(null)
        for (let i=0;i<boardSize;i++){
            const squares=Array(boardSize).fill(null)
            for(let j=0;j<boardSize;j++){
                const squareKey=i*boardSize+j
                squares.push(<span key={squareKey}>{this.renderSquare(squareKey)}</span>)
            }
            board.push(<div key={i}>{squares}</div>)
        }
        return board
    }

    render(){
        return(
            <div>
                <div>Board</div>
                {this.renderSquareBoard()}
            </div>
        )
    }
}
export default Board