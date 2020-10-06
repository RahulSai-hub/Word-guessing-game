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
