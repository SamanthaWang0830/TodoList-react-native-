import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const TodoItem=({title,onDelete,id})=>{
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this,id)}>
            <View style={styles.listItem}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity> 
    )
}

const styles=StyleSheet.create({
    listItem:{
        padding:10,
        margin:10,
        backgroundColor:"grey",
        borderColor:"green",
        borderWidth:2
    }
})

export default TodoItem;