import React from 'react';
import {StyleSheet, Text, View, TextInput, Animated, Easing, AsyncStorage} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class InterestsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
        <View style={{backgroundColor: '#EAF0FA'}}>
          <Text style={[styles.text]}>
            received name: {this.state.data.name}b
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#EAF0FA',
  },
  text: {
    color: "#448AFF",
  },
});