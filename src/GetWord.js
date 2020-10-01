import React, { Component } from 'react';
import { Text, View } from 'react-native';
class GetWord extends Component {
    state = {
        currentWord: ''
    }
    async componentDidMount() {
        if(this.state.currentWord === ''){
            await fetch('https://fourtytwowords.herokuapp.com/words/randomWord?api_key=a98eff3917981ec80a86523e17be5f61287bd0a6595728ef9feb6a9cf50f354db16fe8aa5e96d7405784d4771876d1ff84d8b644c569371bd70ce16fa49d2fff5e15de4c572b47f55792f763df03a2c7')
            .then(response => response.json())
            .then(
                data => {
                    this.setState({
                        currentWord: data.word
                    });
                }
            )
            this.props.setCurrentWord(this.state.currentWord);
        }
    }
    render() {
        return (
            <Text>
                Fetching the data....
             </Text>
        );
    }
}
export default GetWord;