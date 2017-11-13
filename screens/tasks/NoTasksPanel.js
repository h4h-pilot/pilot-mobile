import React from 'react';``
import {StyleSheet, Text, View, TextInput, Animated, Easing, AsyncStorage} from 'react-native';

export default class NoTasksPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    }
  }

  componentDidMount(){
    AsyncStorage.setItem('globalState', 'interests', (error)=>{
      if (error) {
        alert(error);
      }
    });
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={[styles.text, styles.hello]}>Hey {this.state.name},</Text>
          <Text style={[styles.text, styles.description]}>It seems like you don't have any tasks set for today.</Text>
          <Text style={[styles.text, styles.tip]}>Add a task using the button below!</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30, marginRight: 30,
    backgroundColor: '#BBCCF4',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    borderRadius: 25,
},
  text: {
    color: "#5387DC",
  },
  errorText: {
    fontSize: 40,
    fontWeight: '400',
    color: '#D97A7A',
  },
  hello: {
    marginTop: 25,
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
  },
  description: {
    fontSize: 22.5,
    fontWeight: '400',
    marginLeft: 20, marginRight: 20, marginTop: 15,
    color: '#4970AF',
  },
  tip: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 20, marginRight: 20,
    color: '#4970AF',
    marginBottom: 30,
  }
});