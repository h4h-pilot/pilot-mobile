import React from 'react';
import {StyleSheet, Animated, Easing, View} from 'react-native';

export default class TitleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1),
    };
  }

  componentDidMount() {
    Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 0,
          delay: 1250,
          easing: Easing.easeOut,
          duration: 500,
        }
    ).start((completed)=>{
      if (completed) {
        const { navigate } = this.props.navigation;
        navigate('Onboarding');
      }
    })
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.upperSection}>
            <Animated.Text style={[styles.titleText, {opacity: this.state.fadeAnim}]}>Pilot</Animated.Text>
          </View>
          <View style={styles.lowerSection}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0FA',
  },
  titleText: {
    fontSize: 60,
    fontWeight: "700",
    color: "#448AFF",
  },
  upperSection: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  }, lowerSection: {
    flex: 1,
  }
});