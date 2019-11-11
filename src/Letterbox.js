import React, {Component} from 'react';
import {TiArrowUpOutline, TiArrowDownOutline} from "react-icons/ti";

class Letterbox extends Component {
    constructor(props) {
        super(props);
        let letters = this.selectWords(props.puzzle);
        let fontColor = this.getFontColor(props.puzzle);
        let backgroundColor = this.getBackgroundColor(props.puzzle);
        this.state = {
            ...letters,
            puzzle: props.puzzle,
            letterOneLoc: 0,
            letterTwoLoc: 0,
            letterThreeLoc: 0,
            letterFourLoc: 0,
            fontColor: fontColor,
            backgroundColor: backgroundColor
        }
    }

    componentWillReceiveProps(nextProps) {
        let letters = this.selectWords(nextProps.puzzle);
        let fontColor = this.getFontColor(nextProps.puzzle);
        let backgroundColor = this.getBackgroundColor(nextProps.puzzle);
        this.setState({...letters, puzzle: nextProps.puzzle, fontColor: fontColor, backgroundColor: backgroundColor});
    }

    getFontColor(puzzle) {
        switch (puzzle) {
            case "1":
                return '#851010';
            case "2":
                return '#988F11';
            case "3":
                return '#4F0D61';
            case "4":
                return '#0D6111';
        }
    }

    getBackgroundColor(puzzle) {
        switch (puzzle) {
            case "1":
                return '#EC1C1C';
            case "2":
                return '#F3E517';
            case "3":
                return '#C01CEC';
            case "4":
                return '#1AC922';
        }
    }

    render() {
        return <div
            style={{...codexStyle, borderColor: this.state.fontColor, backgroundColor: this.state.backgroundColor}}>

            <div style={codexSlot}>
                <button
                    style={{...codexButtons, backgroundColor: this.state.backgroundColor, color: this.state.fontColor}}
                    onClick={
                        this.handleUpClickOne.bind(this)
                    }><TiArrowUpOutline size={34}/></button>
                <label style={{
                    ...letters,
                    borderColor: this.state.fontColor,
                    color: this.state.fontColor
                }}>{this.getLetterOne()}</label>
                <button
                    style={{...codexButtons, backgroundColor: this.state.backgroundColor, color: this.state.fontColor}}
                    onClick={
                        this.handleDownClickOne.bind(this)
                    }><TiArrowDownOutline size={34}/></button>
            </div>

            <div style={codexSlot}>
                <button
                    style={{...codexButtons, backgroundColor: this.state.backgroundColor, color: this.state.fontColor}}
                    onClick={
                        this.handleUpClickTwo.bind(this)
                    }><TiArrowUpOutline size={34}/>
                </button>
                <label style={{
                    ...letters,
                    borderColor: this.state.fontColor,
                    color: this.state.fontColor
                }}>{this.getLetterTwo()}</label>
                <button
                    style={{...codexButtons, backgroundColor: this.state.backgroundColor, color: this.state.fontColor}}
                    onClick={
                        this.handleDownClickTwo.bind(this)
                    }><TiArrowDownOutline size={34}/>
                </button>
            </div>
            <div style={codexSlot}>
                <button
                    style={{...codexButtons, backgroundColor: this.state.backgroundColor, color: this.state.fontColor}}
                    onClick={
                        this.handleUpClickThree.bind(this)
                    }><TiArrowUpOutline size={34}/>
                </button>
                <label style={{
                    ...letters,
                    borderColor: this.state.fontColor,
                    color: this.state.fontColor
                }}> {this.getLetterThree()}</label>
                <button
                    style={{...codexButtons, backgroundColor: this.state.backgroundColor, color: this.state.fontColor}}
                    onClick={
                        this.handleDownClickThree.bind(this)
                    }><TiArrowDownOutline size={34}/>
                </button>
            </div>
            <div style={codexSlot}>
                <button
                    style={{...codexButtons, backgroundColor: this.state.backgroundColor, color: this.state.fontColor}}
                    onClick={
                        this.handleUpClickFour.bind(this)
                    }><TiArrowUpOutline size={34}/>
                </button>
                <label style={{
                    ...letters,
                    borderColor: this.state.fontColor,
                    color: this.state.fontColor
                }}> {this.getLetterFour()} </label>
                <button
                    style={{...codexButtons, backgroundColor: this.state.backgroundColor, color: this.state.fontColor}}
                    onClick={
                        this.handleDownClickFour.bind(this)
                    }><TiArrowDownOutline size={34}/>
                </button>
            </div>
        </div>
    }

    selectWords(puzzle) {
        switch (puzzle) {
            case "1" :
                return {
                    letterOne: puzzleOneLetterOne,
                    letterTwo: puzzleOneLetterTwo,
                    letterThree: puzzleOneLetterThree,
                    letterFour: puzzleOneLetterFour,
                };
            case "2" :
                return {
                    letterOne: puzzleTwoLetterOne,
                    letterTwo: puzzleTwoLetterTwo,
                    letterThree: puzzleTwoLetterThree,
                    letterFour: puzzleTwoLetterFour,
                };
            case "3" :
                return {
                    letterOne: puzzleThreeLetterOne,
                    letterTwo: puzzleThreeLetterTwo,
                    letterThree: puzzleThreeLetterThree,
                    letterFour: puzzleThreeLetterFour,
                };
            case "4" :
                return {
                    letterOne: puzzleFourLetterOne,
                    letterTwo: puzzleFourLetterTwo,
                    letterThree: puzzleFourLetterThree,
                    letterFour: puzzleFourLetterFour,
                };
        }
    }

    getLetterOne() {
        return this.state.letterOne[this.state.letterOneLoc]
    }

    getLetterTwo() {
        return this.state.letterTwo[this.state.letterTwoLoc]
    }

    getLetterThree() {
        return this.state.letterThree[this.state.letterThreeLoc]
    }

    getLetterFour() {
        return this.state.letterFour[this.state.letterFourLoc]
    }

    handleUpClick(result, length) {
        if (result === 0) {
            result = length
        }
        return result - 1
    }

    handleUpClickOne() {
        let temp = this.handleUpClick(this.state.letterOneLoc, this.state.letterOne.length);
        this.setState({letterOneLoc: temp})
    }

    handleUpClickTwo() {
        let temp = this.handleUpClick(this.state.letterTwoLoc, this.state.letterTwo.length);
        this.setState({letterTwoLoc: temp})
    }


    handleUpClickThree() {
        let temp = this.handleUpClick(this.state.letterThreeLoc, this.state.letterThree.length);
        this.setState({letterThreeLoc: temp})
    }


    handleUpClickFour() {
        let temp = this.handleUpClick(this.state.letterFourLoc, this.state.letterFour.length);
        this.setState({letterFourLoc: temp})
    }


    handleDownClick(result, length) {
        result = result + 1;
        if (result === length) {
            result = 0;
        }
        return result;
    }

    handleDownClickOne() {
        let temp = this.handleDownClick(this.state.letterOneLoc, this.state.letterOne.length);
        this.setState({letterOneLoc: temp})
    }

    handleDownClickTwo() {
        let temp = this.handleDownClick(this.state.letterTwoLoc, this.state.letterTwo.length);
        this.setState({letterTwoLoc: temp})
    }

    handleDownClickThree() {
        let temp = this.handleDownClick(this.state.letterThreeLoc, this.state.letterThree.length);
        this.setState({letterThreeLoc: temp})
    }

    handleDownClickFour() {
        let temp = this.handleDownClick(this.state.letterFourLoc, this.state.letterFour.length);
        this.setState({letterFourLoc: temp})
    }
}


const puzzleOneLetterOne = ['G', 'F', 'H', 'S', 'R', 'K', 'Q', 'J', 'E', 'A', 'T', 'N'];
const puzzleOneLetterTwo = ['M', 'Z', 'Y', 'D', 'R', 'I', 'A', 'F', 'O', 'W', 'U', 'K'];
const puzzleOneLetterThree = ['J', 'H', 'R', 'Y', 'T', 'N', 'O', 'F', 'B', 'K', 'M', 'U'];
const puzzleOneLetterFour = ['C', 'G', 'T', 'O', 'N', 'K', 'D', 'X', 'Y', 'R', 'S', 'E'];

const puzzleTwoLetterOne = ['B', 'F', 'E', 'W', 'J', 'D', 'V', 'Y', 'O', 'U', 'M', 'C'];
const puzzleTwoLetterTwo = ['K', 'X', 'H', 'T', 'S', 'E', 'O', 'D', 'R', 'N', 'Y', 'B'];
const puzzleTwoLetterThree = ['W', 'B', 'U', 'I', 'S', 'M', 'P', 'X', 'K', 'G', 'D', 'O'];
const puzzleTwoLetterFour = ['R', 'U', 'D', 'O', 'K', 'A', 'L', 'W', 'Y', 'T', 'B', 'M'];

const puzzleThreeLetterOne = ['R', 'B', 'U', 'K', 'D', 'P', 'F', 'L', 'A', 'E', 'V', 'Y'];
const puzzleThreeLetterTwo = ['L', 'Q', 'X', 'V', 'I', 'M', 'U', 'O', 'A', 'F', 'J', 'P'];
const puzzleThreeLetterThree = ['C', 'M', 'F', 'G', 'X', 'A', 'T', 'I', 'D', 'W', 'S', 'R'];
const puzzleThreeLetterFour = ['D', 'E', 'L', 'K', 'X', 'T', 'B', 'R', 'C', 'N', 'I', 'M'];

const puzzleFourLetterOne = ['I', 'T', 'J', 'A', 'Y', 'K', 'P', 'S', 'V', 'W', 'E', 'B'];
const puzzleFourLetterTwo = ['K', 'F', 'M', 'T', 'H', 'G', 'C', 'O', 'S', 'N', 'A', 'L'];
const puzzleFourLetterThree = ['B', 'E', 'P', 'M', 'S', 'N', 'O', 'C', 'T', 'Z', 'A', 'L'];
const puzzleFourLetterFour = ['Y', 'B', 'I', 'W', 'K', 'V', 'D', 'R', 'O', 'M', 'A', 'X'];

const codexStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginLeft: '25%',
    marginRight: '25%',
    borderStyle: 'solid',
    borderWidth: 'thick',
    paddingBottom: 20,
    paddingTop: 10,
    // alignContent: 'center',
    // alignItems: 'center',
    justifyContent: 'center',
};

const codexSlot = {

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: 25,
    marginRight: 25,
};

const codexButtons = {
    height: '36px',
    width: '50px',
    borderWidth: 0
};

const letters = {
    fontSize: 42,
    width: '50px',
    display: 'inline-block',
    borderStyle: 'solid',
    borderWidth: 'medium',
    fontFamily: 'Bungee',
};
export {Letterbox};
