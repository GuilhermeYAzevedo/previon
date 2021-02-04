import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import LoginManual from './src/pages/LoginManual/LoginManual';
import {globalStyle} from './src/styles/global';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={globalStyle.safeArea}>
        <LoginManual />
      </SafeAreaView>
    </>
  );
};

export default App;
