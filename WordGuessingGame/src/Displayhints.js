import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'

class Displayhints extends Component {
    state = {
        singleArray: [],   
        types: [], 
        scores: [], 

        Hints: [],  
        currentWord: '',
    }
    handlesubmit=(e)=>{
        this.state.Hints.push(e);
        this.props.setRevealHintsForAll(this.state.Hints)
        this.setState({
            Hints: [...this.state.Hints]
        });
        this.props.setScore(this.state.scores[e]);
        if (this.state.types[e] ==='Synonym:') {
            this.props.setSynonymAsHints(this.state.singleArray[e])
        }
    }
    createList() {
        this.state.singleArray = [];
        this.state.scores = [];
        for (let i = 0; i < this.props.totalData.length; i++) {
            if (i === 1 || i === 2) {
                for (let j = 0; j < this.props.totalData[i].length; j++) {
                    this.state.singleArray.push(this.props.totalData[i][j]);
                    if (i === 1) {
                        this.state.types.push('Synonym:');
                    } else {
                        this.state.types.push('Antonym:');
                    }
                    this.state.scores.push(2);
                }
            } else {
                for (let j = 0; j < this.props.totalData[i].length; j++) {
                    if (j === 1) {
                        this.state.types.push('FirstLetter:');
                        this.state.singleArray.push(this.props.currentWord[0]);
                        this.state.scores.push(3);
                    }
                    if (j === 2) {
                        this.state.types.push('JumbleWord');
                        let word = this.props.currentWord.split('');
                        word = word.sort();
                        word = word.join('-')
                        this.state.singleArray.push(word);
                        this.state.scores.push(7);
                    }
                    if (j == 4) {
                        this.state.types.push('LastLetter:');
                        this.state.singleArray.push(this.props.currentWord[this.props.currentWord.length - 1]);
                        this.state.scores.push(3);
                    }
                    this.state.types.push('Definition:');
                    this.state.singleArray.push(this.props.totalData[i][j].text);
                    this.state.scores.push(2);
                }
            }
        }
        this.props.setDataForAllWords(this.state.singleArray);
        this.props.setTypesofData(this.state.types);
    }
    render() {
        if (this.props.indexToShow !== -1) {
            if (this.props.currentWordHistory === true) {
                return (
                    <ScrollView>
                        {this.props.totalData.map((item, index)=>(
                            index === 0 ? (
                                this.FirstHintToDisplay(this.props.typesofHints, index, item)
                            ) : (this.props.RevealedHints) ? (
                                this.props.RevealedHints.includes(index) ? (
                                    this.hintsPresent(this.props.typesofHints, index, item)
                                ) : (
                                        this.hintsNotPresent(this.props.typesofHints, index)
                                    )
                            ) : (
                                    this.hintsNotPresent(this.props.typesofHints, index)
                                )
                        )
                        )}
                    </ScrollView >
                )
            }
            else {
                return (
                    <ScrollView>
                        {this.props.totalData.map((item, index) => (
                            (this.props.RevealedHints) ? (
                                this.props.RevealedHints.includes(index) ? (
                                    this.hintsPresent(this.props.typesofHints, index, item)
                                ) : (
                                        this.hintsNotPresentForHistory(this.props.typesofHints, index, item)
                                    )
                            ) : (
                                    this.hintsNotPresentForHistory(this.props.typesofHints, index, item)
                                )
                        )
                        )}
                    </ScrollView >
                )
            }
        }
        else {
            if (this.state.Hints.length > 0) {
                return (
                    <ScrollView>
                        {this.state.singleArray.map((item, index) => (
                            index === 0 ? (
                                this.FirstHintToDisplay(this.state.types, index, item)
                            ) : (this.state.Hints.includes(index)) ? (
                                this.hintsPresent(this.state.types, index, item)
                            ) : (
                                        this.hintsNotPresent(this.state.types, index)
                                    )
                        )
                        )}
                    </ScrollView>
                )
            }
            else {
                this.createList()
                return (
                    <ScrollView>
                        {this.state.singleArray.map((item, index) => (
                            index === 0 ? (
                                this.FirstHintToDisplay(this.state.types, index, item)
                            ) : (
                                    this.hintsNotPresent(this.state.types, index)
                                )
                        )
                        )}
                    </ScrollView>
                );
            }
        }
    }
}
export default Displayhints;
