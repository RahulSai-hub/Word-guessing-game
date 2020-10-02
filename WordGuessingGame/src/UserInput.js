import React,{useState} from 'react';
import {Text,View,TextInput,StyleSheet,TouchableHighlight} from 'react-native';
const UserInput=({setAnswer})=>{
    
    const[data,setData]=useState();
    /*const handleChange=()=>{
        setData({
            data:data
        })
    }*/
    const handlePress=()=>{
        if(data){
            setAnswer(data);
            setData({
                data:''
            })
        }
    }
    return (
        <View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={styles.container}>
                    <TextInput style={styles.label} placeholder="Enter the answer(word)!!"
                    onChangeText={(text)=> setData({text})}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.button}
                    onPress={handlePress}
                    >
                        <View style={styles.buttoncontainer}>
                        <Text style={{ fontSize: 18, color: 'white' }}>Submit</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:100
    },
    buttonContainer:{
        //flex: 1,
        //justifyContent: "center",
        paddingHorizontal:100
    },
    buttoncontainer:{
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 30,
        backgroundColor:'green',
        marginTop:50
    },
    label: {
        height: 40,
        width: 250,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 1,
        alignItems:'center',
        padding:10
    },
    button:{

    }
})
export default UserInput;