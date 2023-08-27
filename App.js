import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [tasksecond, setTasksecond] = useState('');
  const [taskseconds, setTaskseconds] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask('');
    }
  };

  const addtasks = () => {
    if (tasksecond.trim() !== '') {
      setTaskseconds([...taskseconds, { id: Date.now(), text: task }])
      setTasksecond('');
    }
  }

  const renderItem = ({ item }) => (
    <View style={styles.task}>
      <Text>{item.text}</Text>
    </View>
  );

  const Combineonpress = () => {

    addTask();
    addtasks();

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your first task"
        value={task}
        onChangeText={text => setTask(text)}
      />

      <Button title='Add task' onPress={addTask} />

      <TextInput
        style={styles.inputs}
        placeholder='Enter your '
        value={tasksecond}
        onChangeText={text => setTasksecond(text)}
      />

      <Button title='Add task' onPress={addtasks} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />

      <FlatList
        data={taskseconds}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop :50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },

  inputs : {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    marginTop : 20,
  },
  task: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default App;
