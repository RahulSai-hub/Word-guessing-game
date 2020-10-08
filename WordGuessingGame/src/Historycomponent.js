import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Button from 'apsl-react-native-button';

class Historycomponent extends Component {
    constructor() {
        super();
        this.state = {
            currentPositon: -1,
            currentSize:3,
            skip:'Get New Word\n(-4 pts)'
        }
    }
     
    resetGame = (e) => {
        this.props.resetGame();
    }
    setIndex = (e) => {
        this.props.setindexToShowHistory(e);
         if(e===this.props.completedWordsForHistory.length){
            this.setState({ 
                currentPosition:-1,
                currentSize:3
             });
        }else{
            this.setState({ 
                currentPosition:e,
                currentSize:1
             });
        }
    }
    skipWord = () => {
        this.props.skipCurrent();
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 3 }}>
                        <Text style={{ fontSize: 25,color:'white',fontWeight:'bold',fontFamily:'normal' }}>History</Text>
                    </View>
                    <Button style={styles.WordsButton} textStyle={{ fontSize: 13, color: 'white' }}
                        onPress={() => this.skipWord()}>
                        {this.state.skip}
                        </Button>
                    <Button style={{ height: 35, width: '100%',borderWidth:this.state.currentSize }} textStyle={{ fontSize: 15 }}
                        onPress={() => this.setIndex(this.props.completedWordsForHistory.length)}>
                        playing:{this.props.currentWordScore}
                    </Button>
                    {this.props.completedWordsForHistory.map((item, index) => (
                        index === this.state.currentPosition ? (
                        <Button style={{ height: 40, width: 'auto',borderWidth:3,backgroundColor: this.props.color[index] }} textStyle={{ fontSize: 15, marginLeft: 0 }}
                            onPress={() => this.setIndex(index)}>
                            {item}{this.props.completedWordsScore[index]}
                        </Button>
                       ) :(
                        <Button style={{ height: 40, width: 'auto', backgroundColor: this.props.color[index] }} textStyle={{ fontSize: 15, marginLeft: 0 }}
                            onPress={() => this.setIndex(index)}>
                            {item}{this.props.completedWordsScore[index]}
                        </Button>
                       )
                    ))}
                    <Button style={styles.WordsButton} textStyle={{ fontSize: 13, color: 'white'}}
                        onPress={() => this.resetGame()}>
                        Reset Game
                    </Button>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 7,
        marginTop: 40,
        marginLeft: 2,
       
        
    },
    WordsButton: {
        height: 60,
        margin:3,
        width: 'auto',
        borderRadius: 20,
        borderColor: 'black',
        backgroundColor: 'maroon',
    }
})
export default Historycomponent;