import React from 'react';
import CornerLogo from '../../shared/CornerLogo';
import {StyleSheet, Text, View, TextInput, Animated, Easing, AsyncStorage} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class OnboardingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      animations: {
        hello: new Animated.Value(0),
        desc: new Animated.Value(0),
        name: new Animated.Value(0),
        globalOpacity: new Animated.Value(1),
      },
    }
  }

  componentDidMount() {
    AsyncStorage.setItem('globalState', 'onboarding', (error) => {
      if (error) {
        alert(error);
      }
    });

    Animated.timing(
        this.state.animations.hello,
        {
          toValue: 1,
          delay: 500,
          easing: Easing.easeIn,
          duration: 600,
        }
    ).start((completed) => {
      if (completed) {
        Animated.timing(
            this.state.animations.desc,
            {
              toValue: 1,
              easing: Easing.easeIn,
              delay: 650,
              duration: 600,
            }
        ).start((completed) => {
          if (completed) {
            Animated.timing(
                this.state.animations.name,
                {
                  toValue: 1,
                  easing: Easing.easeIn,
                  delay: 500,
                  duration: 500,
                }
            ).start();
          }
        })
      }
    });
  }

  onInputChangeText(text) {
    this.setState((state) => {
      state.inputText = text;
      return state;
    });
  }

  onInputSubmit() {
    let name = this.state.inputText;
    if (name.indexOf(' ') >= 0) {
      name = name.substr(0, name.indexOf(' '));
    }
    name = name[0].toUpperCase() + name.substr(1);

    AsyncStorage.setItem('user:name', name, (error) => {
      if (error) {
        alert(error);
      }

      Animated.timing(
          this.state.animations.globalOpacity,
          {
            toValue: 0,
            easing: Easing.easeOut,
            duration: 650,
          }
      ).start();

      Animated.timing(
          this.state.animations.name,
          {
            toValue: 0,
            easing: Easing.easeOut,
            duration: 650,
          }
      ).start((finished) => {
        if (finished) {
          const {navigate} = this.props.navigation;
          navigate('Tasks', {name: name});
        }
      });
    });
  }

  render() {
    return (
        <KeyboardAwareScrollView
            style={{backgroundColor: '#EAF0FA'}}
            resetToCoords={{x: 0, y: 0}}
            contentContainerStyle={styles.container}
            scrollEnabled={false}
        >
          <CornerLogo animated={true}/>
          <View style={{flex: 0.75}}/>
          <Animated.View
              style={[styles.nameView, {opacity: this.state.animations.globalOpacity}]}>
            <Animated.Text
                style={[styles.text, styles.helloText, {opacity: this.state.animations.hello}]}>
              Hello!
            </Animated.Text>
            <Animated.Text
                style={[styles.text, styles.descText, {opacity: this.state.animations.desc}]}>
              I’m <Text style={{fontWeight: '500'}}>Pilot</Text>, and I’m here to help you live a
              better life.
            </Animated.Text>
          </Animated.View>
          <Animated.View
              style={[styles.inputView, {opacity: this.state.animations.name}]}>
            <Text style={[styles.text, styles.inputText]}>
              What's your name?
            </Text>
            <TextInput style={styles.inputField}
                       onChangeText={this.onInputChangeText.bind(this)}
                       value={this.state.inputText}
                       placeholder={"Johnny"}
                       placeholderTextColor={"#87A3EC"}
                       selectionColor={"#A9BDEF"}
                       onSubmitEditing={this.onInputSubmit.bind(this)}
                       autoCorrect={false}
            />
          </Animated.View>
          <View style={{flex: 2}}/>
        </KeyboardAwareScrollView>
    );
  }
}

const
    styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
      },
      text: {
        color: "#448AFF",
      },
      nameView: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
      },
      helloText: {
        fontWeight: '600',
        fontSize: 50,
      },
      descText: {
        marginTop: 25,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 30,
        fontWeight: '300',
      },
      inputView: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      inputText: {
        fontWeight: '500',
        fontSize: 30,
      },
      inputField: {
        marginTop: 20, marginLeft: 40, marginRight: 40,
        borderRadius: 15,
        height: 60,
        alignSelf: 'stretch',
        backgroundColor: '#3F6AD7',
        fontSize: 25,
        color: '#EAF0FA',
        textAlign: 'center',
      },
    });