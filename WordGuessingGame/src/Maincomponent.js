import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Fetchword from './Fetchword';
import UserInput from './UserInput';
class Maincomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: [[]], 
            Score: 0, 
            CurrentWord: '',
            UserAnswer: '',
            
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
        return(
            <View style= {styles.container1}>
                <UserInput setAnswer= {this.setAnswer}/>
               
            
            <View style={styles.container}>
                <Fetchword setCurrentWord={this.setCurrentWord}/>
                
            </View>
            <Text>{this.state.UserAnswer}</Text>
            <Text>{this.state.CurrentWord}</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:1,
        marginLeft:50,
        borderRadius:10,
       
    },
    
})
export default Maincomponent;