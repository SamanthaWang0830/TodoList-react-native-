import React from 'react';
import {View,TextInput,Button,StyleSheet,Modal} from 'react-native';

const Input=({handleChange,pressToAddTodo,enterTodo,visible,setIsAddMode})=>{
    const changeHandler=(e)=>{
        handleChange(e)
    }
    const addHandler=()=>{
        pressToAddTodo(enterTodo);
    }
    const cancelhandler=()=>{
        setIsAddMode(false);
    }
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="todo" 
                style={styles.input} 
                onChangeText={changeHandler} 
                value={enterTodo}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button 
                        title="ADD"
                        onPress={addHandler}
                    />
                    </View>
                    <View style={styles.button}>
                    <Button 
                        title="CANCEL"
                        color="red"
                        onPress={cancelhandler}
                    />
                    </View>
                </View>
                
            </View>
        </Modal>
    )
}
const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center', 
        alignItems:"center"
    },
    input:{
        borderColor:"black",
        borderWidth:1,
        padding:10,
        width:"80%"
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        width:"60%"
    },
    button:{
        width:"40%"
    }
})
export default Input;