import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, StyleSheet } from 'react-native';

class UserInput extends Component {
    state={
        text:''
    }
    handlesubmit = () => {
        if (this.state.text) {
            this.props.setAnswer(this.state.text);
            this.setState({
                text: ''
            });
        }
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={styles.container}>
                    <View>
                        <TextInput
                            style={styles.label}
                            placeholder="Enter the word(answer)!"
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                        />
                    </View>
                    <View  >
                        <TouchableHighlight style={styles.button}
                            onPress={() => this.handlesubmit()} >
                            <Text style={{ fontSize: 18, color: 'white' }}>Submit</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 250,
        width: 80,
        height: 40,
        marginLeft:0,
        marginRight:30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'green',
        borderRadius: 10,
    },
    label: {
        height: 40,
        width: 250,
        marginTop:100,
        paddingLeft:10,
        marginLeft:250,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 1
    }
})
export default UserInput;