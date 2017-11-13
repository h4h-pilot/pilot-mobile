import React from 'react';
import { Animated, Easing } from 'react-native';
import {StackNavigator} from 'react-navigation';
import TitleScreen from './screens/title/TitleScreen';
import OnboardingScreen from './screens/onboarding/OnboardingScreen';
import InterestsScreen from './screens/onboarding/InterestsScreen';
import TasksScreen from './screens/tasks/TaskScreen';

export default StackNavigator({
  Title: {screen: TitleScreen},
  Onboarding: {screen: OnboardingScreen},
  Interests: {screen: InterestsScreen},
  Tasks: {screen: TasksScreen},
}, {
  initialRoutName: 'Title',
  headerMode: 'none',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
  }),
});
