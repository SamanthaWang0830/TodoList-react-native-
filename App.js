import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Button,FlatList} from 'react-native';
import {useState} from 'react';
import TodoItem from './component/TodoItem.component.js'
import Input from './component/Input.component.js'

export default function App() {
  const [enterTodo,setEnterTodo]=useState('');
  const [todoList,setTodoList]=useState([]);
  const [isAddMode, setIsAddMode]=useState(false)

  const handleChange=(e)=>{
    setEnterTodo(e)
  }
  const pressToAddTodo=(enterTodo)=>{
    setTodoList([...todoList,{id:Math.random().toString(), value:enterTodo}]);
    setEnterTodo('');
    setIsAddMode(false);
  }
  const pressToRemove=(id)=>{
    const newList=todoList.filter((item)=>item.id==id? false:true)
    setTodoList(newList)
  }
  return (
    <View style={styles.screen}>
      <Button title="Add new todo" onPress={()=>setIsAddMode(true)}/>
      <Input 
        pressToAddTodo={pressToAddTodo}
        handleChange={handleChange}
        enterTodo={enterTodo}
        visible={isAddMode}
        setIsAddMode={setIsAddMode}
      />
      <FlatList 
        data={todoList} 
        renderItem={itemData=><TodoItem onDelete={pressToRemove} id={itemData.item.id} title={itemData.item.value}/>} 
      />
      {/* <ScrollView>
        {todoList.map(todo=>(
          <View key={todo.key} style={styles.listItem}><Text>{todo.value}</Text></View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50,
    flex:1
  }
});
