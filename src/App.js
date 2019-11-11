import React, {Component} from 'react';
import './App.css';
import {Letterbox} from "./Letterbox";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="App" style={{backgroundImage: `url(./paper.jpg)`}}>
                <div style={puzzleButtons}>
                    <button style={{...puzzleButton,backgroundColor: 'red',color: 'white'}} onClick={() => {
                        this.setState({puzzle: "1"})
                    }}>Red
                    </button>
                    <button style={{...puzzleButton,backgroundColor: 'yellow',}} onClick={() => {
                        this.setState({puzzle: "2"})
                    }}>Yellow
                    </button>
                    <button style={{...puzzleButton,backgroundColor: 'purple',color: 'white'}} onClick={() => {
                        this.setState({puzzle: "3"})
                    }}>Purple
                    </button>
                    <button style={{...puzzleButton,backgroundColor: 'green',color: 'white'}} onClick={() => {
                        this.setState({puzzle: "4"})
                    }}>Green
                    </button>
                </div>

                <div style={puzzleTextBody}>
                    {this.generateBodyText()}
                </div>

                {this.generateLetterBoxes()}
            </div>
        );
    }

    generateLetterBoxes() {
        switch (this.state.puzzle) {
            case "1" :
                return <Letterbox puzzle={"1"}/>;

            case "2" :
                return <Letterbox puzzle={"2"}/>;

            case "3" :
                return <Letterbox puzzle={"3"}/>;

            case "4" :
                return <Letterbox puzzle={"4"}/>;

            default:
                return <div/>
        }
    }

    generateBodyText() {
        return <div>{this.getTextBasedOnState()}</div>
    }

    getTextBasedOnState() {
        switch (this.state.puzzle) {
            case "1" : // Time
                return <div style={puzzleTextBox}>
                    <div style={puzzleText}>
                        Mountains will crumble to it and temples fall, and no man can survive its endless call.
                    </div>
                    <div style={puzzleText}>
                        What am I?
                    </div>
                </div>;

            case "2" : // Wood
                return <div style={puzzleTextBox}>
                    <div style={puzzleText}>
                        I am the heart that does not beat. If cut, I bleed without blood. I can fly, but have
                        no wings. I can float, but have no fins. I can sing, but have no mouth.
                    </div>
                    <div style={puzzleText}>
                        What am I?
                    </div>
                </div>;
            case "3" : // Dice
                return <div style={puzzleTextBox}>
                    <div style={puzzleText}>
                        I have black spots and a white face, I am fat not thin, and I help you to win while
                        tumbling all over the place?
                    </div>
                    <div style={puzzleText}>
                        What am I?
                    </div>
                </div>;
            case "4" : // Star
                return <div style={puzzleTextBox}>
                    <div style={puzzleText}>
                        At night I come without being fetched. By day I am lost without being stolen.
                    </div>
                    <div style={puzzleText}>
                        What am I?
                    </div>
                </div>;
            default :
                return <div/>;
        }
    }
}


export default App;


const puzzleTextBox = {
    marginBottom: 50
};

const puzzleText = {
    marginTop: 15

};

const puzzleTextBody = {
    marginTop: 40,
    marginLeft: '15%',
    marginRight: '15%',
    fontSize: 36,
    fontFamily: 'RockSalt',
};

const puzzleButtons = {
    flex: 1,
    flexDirection: 'row',
    marginTop: 25,
};

const puzzleButton = {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    width: 78,
    borderRadius: 15,
};
