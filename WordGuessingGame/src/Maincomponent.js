import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Fetchword from './Fetchword';
import UserInput from './UserInput';
import FetchData from './FetchData';
import Displayuserinputs from './DisplayUserinputs';
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
                <Fetchword setCurrentWord={this.setCurrentWord}/>
            <Text style={styles.userword}>{this.state.UserAnswer}</Text>
            <Text style={styles.apidata}> The fetched word from api is:{this.state.CurrentWord}</Text>
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
    userword:{
        marginTop:200,
        fontWeight:'bold',
        fontFamily:'cursive',
        marginLeft:300

        
    },
    apidata:{
        marginTop:150,
        fontWeight:'bold',
        fontFamily:'cursive',
        marginLeft:20
    }
    
})
export default Maincomponent;