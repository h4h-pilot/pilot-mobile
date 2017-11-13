import React from 'react';
import CornerLogo from '../../shared/CornerLogo';
import {StyleSheet, Text, View, Animated, Easing, AsyncStorage} from 'react-native';
import NoTasksPanel from './NoTasksPanel';
import Button from 'react-native-button';
import MakeTaskScreen from './MakeTaskScreen';

export default class TasksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: this.props.navigation.state.params.name,
      },
      tasks: [],
      animations: {
        globalOpacity: new Animated.Value(0),
      },
      makeTaskScreenMode: "off",
    }
  }

  componentDidMount() {
    AsyncStorage.setItem('globalState', 'interests', (error) => {
      if (error) {
        alert(error);
      }
    });

    Animated.timing(
        this.state.animations.globalOpacity,
        {
          toValue: 1,
          easing: Easing.easeIn,
          duration: 550,
        }
    ).start();
  }

  onTaskButtonPressed() {
    alert("should-show-task-creation-screen (not-yet-implemented)")
    /*
    this.setState((state)=>{
      state.makeTaskScreenMode = "new";
      return state;
    });
    */
  }

  render() {
    let activePanel = <View><Text style={styles.errorText}>ACTIVE PANEL NOT SET</Text></View>
    if (this.state.tasks.length == 0) {
      activePanel = <NoTasksPanel name={this.state.data.name}/>
    }
    return (
        <View style={styles.container}>
          <Animated.View style={[styles.container, {opacity: this.state.animations.globalOpacity}]}>
            {activePanel}
            <View style={styles.taskButtonView}>
              <Button containerStyle={styles.taskButtonContainer}
                      style={styles.taskButtonText}
                      onPress={this.onTaskButtonPressed.bind(this)}>new task</Button>
            </View>
          </Animated.View>
          <CornerLogo/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0FA',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    color: "#448AFF",
  },
  errorText: {
    fontSize: 40,
    fontWeight: '400',
    color: '#D97A7A',
  },
  taskButtonView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  taskButtonContainer: {
    padding: 10,
    borderRadius: 20,
    position: 'absolute',
    backgroundColor: '#448AFF',
    height: 59,
    width: 179,
    bottom: 40,
    overflow: 'hidden',
    marginLeft: 'auto', marginRight: 'auto',
  },
  taskButtonText: {
    fontSize: 27.5,
    fontWeight: '400',
    color: '#EEF5FF',
    textAlign: 'center',
  },
});