import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {ADD_TASK_ACTION} from '../../core/redux/action/TaskAction';
import {ADD_TASK, ENTER_TASK_TITLE} from '../../core/constant/Constants';

class AddTaskScreen extends React.Component {
  state = {
    currentTaskTitle: undefined,
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <TextInput
            placeholder={ENTER_TASK_TITLE}
            onChangeText={(text) => this.setState({currentTaskTitle: text})}
          />
          <Button
            title={ADD_TASK}
            onPress={() => this.props.addTask(this.state.currentTaskTitle)}
          />
          {console.log('Render:' + JSON.stringify(this.props.taskList))}

          {this.props.taskList.length > 0 ? (
            <View style={{margin: 20}}>
              <Text>Latest task:</Text>
              <Text>
                {this.props.taskList[this.props.taskList.length - 1].title}
              </Text>
            </View>
          ) : null}
        </SafeAreaView>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {taskList: state.taskReducer.taskList};
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: (taskTitle) => {
      const task = {title: taskTitle};
      dispatch({type: ADD_TASK_ACTION, data: task});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskScreen);
