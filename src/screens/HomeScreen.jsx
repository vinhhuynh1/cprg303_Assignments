import MainLayout from "../layouts/MainLayout";
import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
  } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';


export default function HomeScreen({navigation}) {
    const[tasks, setTasks] = React.useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    const addTask = (task) =>{
        setTasks([...tasks, task])
    };

    return(
        <MainLayout>
            <SafeAreaView>
                <Text>To Do List</Text>

                <ToDoList tasks={tasks}></ToDoList>
                <ToDoForm addTask={addTask}></ToDoForm>

                <Button title="Go to about" onPress={()=>navigation.navigate('About')} />
            </SafeAreaView>
        </MainLayout>
    );
}