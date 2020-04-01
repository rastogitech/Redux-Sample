import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AddTaskScreen from './src/feature/task/AddTaskScreen';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AddTaskScreen />
      </NavigationContainer>
    );
  }
}
export default App;
