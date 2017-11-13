import React from 'react';
import {Easing, Animated, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class CornerLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: props.animated || false,
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount(){
    if (this.state.animated) {
      Animated.timing(
          this.state.fadeAnim,
          {
            toValue: 1,
            easing: Easing.easeIn,
            duration: 500,
          }
      ).start();
    } else {
      this.setState((prevState)=>{
        prevState.fadeAnim = new Animated.Value(1);
        return prevState;
      });
    }
  }

  render() {
    return (
        <Animated.Text style={[styles.text, {opacity: this.state.fadeAnim}]}>
          P
        </Animated.Text>
    )
  }
}

CornerLogo.propTypes = {
  animated: PropTypes.bool,
};

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    fontSize: 45,
    fontWeight: "700",
    color: "#448AFF",
    top: 30,
    left: 25,
  },
});