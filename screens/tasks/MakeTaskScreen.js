import React from 'react';
import {StyleSheet, Text, View, TextInput, Animated, Easing, AsyncStorage} from 'react-native';

export default class MakeTaskScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animations: {
        globalOpacity: new Animated.Value(0)
      },
      data: props.data,
    }
    this.props.pointerEvents = 'box-none';
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mode && nextProps.mode == "off") {
      if (this.state.animations.globalOpacity._value != 0){
        Animated.timing(
            this.state.animations.globalOpacity,
            {
              toValue: 0,
              easing: Easing.easeOut,
              duration: 500,
            }
        ).start();
      }
      this.props.pointerEvents = 'box-none';
    } else if (nextProps.mode && nextProps.mode == "new") {
      Animated.timing(
          this.state.animations.globalOpacity,
          {
            toValue: 1,
            easing: Easing.easeIn,
            duration: 500,
          }
      ).start();
    }
  }

  render() {
    return (
        <Animated.View style={[styles.container, {opacity: this.state.animations.globalOpacity}]}>
          <Text>uh me irl</Text>
        </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0, left: 0, bottom: 0, right: 0,
    backgroundColor: '#EAF0FA',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  label: {
    color: "#5387DC",
  },
  errorText: {
    fontSize: 40,
    fontWeight: '400',
    color: '#D97A7A',
  },
});