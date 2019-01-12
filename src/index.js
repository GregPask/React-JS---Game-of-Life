import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {

    //This function sends a reference of what row/column has been clicked back to the game component.
    selectState = () => {
        this.props.selectState(this.props.rows, this.props.cols);
    }

    render() {
        return (
            <div onClick={this.selectState} id={this.props.id} className={this.props.class}>

            </div>
        );
    }
}




class Board extends React.Component {

    render() {
        /*
        Here we loop through every square and assign it with either a
        'true' or 'false' class. These are then pushed as components to the squares arrray!
        */

        let squaresArray = [];

        for (let x = 0; x < this.props.rows; x++) {
            for (let y = 0; y < this.props.cols; y++) {

                let boxState = (this.props.board[x][y]) ? "square true" : "square false";
                let key = x + "-" + y;
                squaresArray.push(<Square
                    rows={x}
                    cols={y}
                    class={boxState}
                    id={key}
                    key={key}
                    selectState={this.props.selectState}
                />)
            }
        }

        return (
            <div className="board">
                {squaresArray}
            </div>
        );
    }
}







class Game extends React.Component {

    constructor() {
        super();

        this.rows = 30;
        this.cols = 50;

        //Create an initial board 50 x 30 containing consisting of boolen values, which will decide a squares color....
        this.state = {
            board: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
            generation: 0
        }
    }



    selectState = (x, y) => {

        let gridCopy = JSON.parse(JSON.stringify(this.state.board));

        //When a square is clicked it will change the boolean value based upon its existing state...
        gridCopy[x][y] = !gridCopy[x][y];

        this.setState({
            board: gridCopy
        })
    }

    // Create initial Seed for the board . . .
    seed = () => {

        //Create copy of 2d Array...
        let boardCopy = JSON.parse(JSON.stringify(this.state.board));

        for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.cols; y++) {
                if (Math.floor(Math.random() * 8) === 1) {
                    boardCopy[x][y] = true;
                }
            }
        }
        this.setState({
            board: boardCopy
        })
    }



    gameLoop = () => {
        clearInterval(this.interval);
        this.interval = setInterval(this.playGame, 94);
    }


    playGame = () => {

        let board = this.state.board;
        let nextBoard = JSON.parse(JSON.stringify(this.state.board));


        for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.cols; y++) {

                let total = 0;

                //Top left 
                if (x > 0 && y > 0) {
                    if (board[x - 1][y - 1]) {
                        total++;
                    }
                }


                //Top Middle
                if (x > 0) {
                    if (board[x - 1][y]) {
                        total++;
                    }
                }


                //Top Right 
                if (x > 0 && y < this.cols - 1) {
                    if (board[x - 1][y + 1]) {
                        total++;
                    }
                }


                //Middle Left
                if (y > 0) {
                    if (board[x][y - 1]) {
                        total++;
                    }
                }


                //Middle Right
                if (y < this.cols - 1) {
                    if (board[x][y + 1]) {
                        total++;
                    }
                }


                //Bottom left 
                if (x < this.rows - 1 && y > 0) {
                    if (board[x + 1][y - 1]) {
                        total++;
                    }
                }


                //Bottom Middle
                if (x < this.rows - 1) {
                    if (board[x + 1][y]) {
                        total++;
                    }
                }


                //Bottom Right 
                if (x < this.rows - 1 && y < this.cols - 1) {
                    if (board[x + 1][y + 1]) {
                        total++;
                    }
                }

                /* 
                Rules            
                1) If a live cell does not have 2 or 3 neighbours it will die...
                2) If a dead dead has exactly 3 live neighbours it becomes alive...
                */

                if (board[x][y] && (total < 2 || total > 3)) {
                    nextBoard[x][y] = false;
                }

                if (!board[x][y] && (total === 3)) {
                    nextBoard[x][y] = true;
                }
            }
        }

        this.setState({
            board: nextBoard,
            generation: this.state.generation + 1
        })


    }


    pauseGame = () => {
        clearInterval(this.interval);
    }


    clearGame = () => {

        let gridCopy = Array(this.rows).fill().map(() => Array(this.cols).fill(false));

        this.setState({
            board: gridCopy
        })
    }

    componentDidMount() {
        this.seed();
        this.gameLoop();
    }



    render() {
        return (
            <div>
                <h1>Game of Life</h1>
                <h3>Generation: {this.state.generation}</h3>
                <div className="width">
                    <hr className="hr" />
                </div>
                <div className="buttons">
                    <button onClick={this.pauseGame} className="btn btn1">Pause</button>
                    <button onClick={this.clearGame} className="btn btn2">Clear</button>
                    <button onClick={this.seed} className="btn btn3">Seed</button>
                </div>

                <div className="wrap">
                    <Board
                        rows={this.rows}
                        cols={this.cols}
                        board={this.state.board}
                        selectState={this.selectState}
                    />
                </div>
                <div className="play">
                    <button onClick={this.gameLoop} className="btn btn4">Play</button>
                    <p className="p" style={{ "font-size": "1.5em" }}>Pause and Clear to select your own starting seed!</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));

