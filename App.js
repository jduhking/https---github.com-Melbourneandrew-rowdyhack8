import * as React from 'react';
import { StyleSheet, Text, SafeAreaView,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';


import HomePage from './screens/HomePage'
import RecordingPage from './screens/RecordingPage'
import ChatPage from './screens/ChatPage'

export default function App() {
  return (
    <NavigationContainer>
    <SafeAreaView>
     <HomePage/>
    </SafeAreaView>
    </NavigationContainer>
  );
}

