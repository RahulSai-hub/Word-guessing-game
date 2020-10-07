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
    setCurrentWord = (word) => {
        if (word != '') {
            this.setState({
                CurrentWord: word,
            })
        }
    }
    setAnswer= (userinput)=>{
        this.setState=({
            UserAnswer:userinput
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