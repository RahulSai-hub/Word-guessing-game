import React, { Component } from 'react';
import { Text,TextInput ,View, StyleSheet } from 'react-native';
import Fetchword from './Fetchword';
import UserInput from './UserInput';
import FetchData from './FetchData';
import Displayuserinputs from './DisplayUserinputs';
import Historycomponent from './Historycomponent';
class Maincomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: [[]], 
            Score: 0, 
            CurrentWord: '',
            UserAnswer: '',

            currrentWordAnswerList: [],
            synonymsAsHints: [], 
            synonymsListCurrent: [], 
            completedCount: -1, 
            currentWordScore: 0, 
            currentWordAnswerStatus: [], 
            colors: [],
            colorsForAnswerList: [[]],
            statusForInput: '' ,
            completedWordsScore: [],
            completedWordsForHistory: [],
            indexToShowHistory: -1,
            typesofHints: [[]],  
            RevealedHintsForAll: [[]],
            completedWordAnswerList: [[]],
            currentWordHistory: false,

            
            
        }
    }
    resetGame = () => {
        this.setState({
            allData: [[]],
            CurrentWord: '',
            UserAnswer: '',
            currrentWordAnswerList: [],
            synonymsAsHints: [],
            synonymsListCurrent: [],
            completedCount: -1,
           
            RevealedHintsForAll: [[]],
            completedWordAnswerList: [[]],
            currentWordHistory: false,
            colors: [],
            Score: 0,
            currentWordScore: 0,
            completedWordsScore: [],
            completedWordsForHistory: [],
            indexToShowHistory: -1,
            typesofHints: [[]],
            currentWordAnswerStatus: [],
            colorsForAnswerList: [[]],
            statusForInput: ''
        });
    }
    setCurrentWord = (word) => {
        if (word != '') {
            this.setState({
                CurrentWord: word,
                currentWordScore: 0,
                indexToShowHistory: -1,
                completedCount: this.state.completedCount + 1
            })
        }
    }
    setAnswer = (userInput) => {
        userInput = userInput.toLowerCase();
        this.state.currrentWordAnswerList.push(userInput);
        if (userInput === this.state.CurrentWord) {
            this.state.completedWordsForHistory.push(this.state.CurrentWord);
            this.state.completedWordsScore.push(this.state.currentWordScore + 10);
            this.state.completedWordAnswerList[this.state.completedCount] = this.state.currrentWordAnswerList
            this.state.colors[this.state.completedCount] = '#46fa64';
            this.state.currentWordAnswerStatus.push('#46fa64');
            this.state.colorsForAnswerList[this.state.completedCount] = this.state.currentWordAnswerStatus;
            this.setState({
                Score: this.state.Score + 10,
                currrentWordAnswerList: [],
                CurrentWord: '',
                currentWordAnswerStatus: [],
                statusForInput: ''
            });

        }
        else if (this.state.synonymsListCurrent.includes(userInput) && (!(this.state.synonymsAsHints.includes(userInput)))) {
            this.state.completedWordsForHistory.push(this.state.CurrentWord);
            this.state.completedWordsScore.push(this.state.currentWordScore + 10);
            this.state.completedWordAnswerList[this.state.completedCount] = this.state.currrentWordAnswerList
            this.state.colors[this.state.completedCount] = '#46fa64';
            this.state.currentWordAnswerStatus.push('#46fa64');
            this.state.colorsForAnswerList[this.state.completedCount] = this.state.currentWordAnswerStatus;
            this.setState({
                Score: this.state.Score + 10,
                currrentWordAnswerList: [],
                CurrentWord: '',
                currentWordAnswerStatus: [],
                statusForInput: ''
            });
        }
        else {
            this.state.currentWordAnswerStatus.push('#fa4646');
            this.setState({
                Score: this.state.Score - 2,
                currentWordScore: this.state.currentWordScore - 2,
                statusForInput: 'Wrong Answer'

            });
        }
    }
    setScore = (points) => {
        this.setState({
            Score: this.state.Score - points,
            currentWordScore: this.state.currentWordScore - points,
        })
    }
    render(){
        if (this.state.CurrentWord) {
            return (
                <View style={styles.container}>
                    <Text style={styles.textScore}>Score:{this.state.Score}</Text>
                    <Text style={styles.textTitle}>Guess The Word!!</Text>
                    <View style={styles.userInputPage}>
                        <UserInput setAnswer={this.setAnswer} />
                        <Text style={{ fontSize: 20 }}>{this.state.statusForInput}</Text>
                    </View>
                    <View style={styles.Guesses}>
                        <DisplayUserInputs
                            userAnswerList={this.state.currrentWordAnswerList}
                            indexToShowHistory={this.state.indexToShowHistory}
                            completedWordAnswerList={this.state.completedWordAnswerList}
                            currentWordHistory={this.state.currentWordHistory}
                            colorsForAnswerList={this.state.colorsForAnswerList}
                        />
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row' }}>
                        <View style={{ width: '60%', marginTop: '5%' }}>
                            <FetchData
                                settotalData={this.settotalData}
                                setSynonymsofCurrentWord={this.setSynonymsofCurrentWord}
                                setScore={this.setScore}
                                setSynonymAsHints={this.setSynonymAsHints}
                                setRevealHintsForAll={this.setRevealHintsForAll}
                                setTypesofData={this.setTypesofData}

                                dataForAllWords={this.state.allData}
                                currentWordHistory={this.state.currentWordHistory}
                                RevealedHints={this.state.RevealedHintsForAll}
                                typesofHints={this.state.typesofHints}
                                indexToShowHistory={this.state.indexToShowHistory}
                                currentWord={this.state.CurrentWord}
                            />
                        </View>
                        <View style={{ marginLeft: 2, marginTop: '5%', width: '40%', height: 'auto' }}>
                            <Historycomponent
                                skipCurrent={this.skipCurrent}
                                resetGame={this.resetGame}
                                completedWordsForHistory={this.state.completedWordsForHistory}

                                color={this.state.colors}
                                setindexToShowHistory={this.setindexToShowHistory}

                                currentWordScore={this.state.currentWordScore}
                                completedWordsScore={this.state.completedWordsScore}
                            />
                        </View>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <Text style={styles.textScore}>Score:{this.state.Score}</Text>
                    <Text style={styles.textTitle}>Guess The Word</Text>
                    <View style={styles.userInputPage}>
                        <UserInput />
                    </View>
                </View>    
            )
        }
    }
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        margin: 4,
        flexDirection: 'column',
        backgroundColor:'darkslategrey',
        borderRadius: 5
    },
    userInputPage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 80,
        marginTop: '5%',
        backgroundColor: 'slategray',
        borderColor: 'darkgray',
    },
    textScore: {
        textAlign: 'right',
        marginRight: '5%',
        fontSize: 20,
        fontWeight:'bold'
    },
    textTitle: {
        textAlign: 'center',
        padding: 3,
        fontSize: 30,
        fontFamily:'cursive',
        backgroundColor: '#ffff'
    },
    Guesses: {
        width: 'auto',
        marginTop: '1%',
        borderRadius: 4,
        padding: 3
    }
});
export default Maincomponent;