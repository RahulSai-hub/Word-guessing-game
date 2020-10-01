import React,{Component} from 'react';
class UserInput extends Component{
    state={
        data:''
    }
    handleChange=(e)=>{
        this.setState({
            data:this.state.data
        })
    }
    render(){
        return(
            <View style={{flex:1,flexDirection:'colomn'}}>
                <View style={styles.container}>
                    <View>
                        <TextInput style={styles.label} placeholder="Enter the word(answer)" 
                        onChangeText={this.handleChange} value={this.state.data}/>
                    </View>
                    <View>
                        <TouchableHighlight style={styles.button} onPress={()=> this.handleSubmit()}>
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: 10,
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a8cf7',
        borderRadius: 8,
    },
    label: {
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5
    }
})
export default UserInput;