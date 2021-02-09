import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {globalStyle} from './src/styles/global';
import Routes from './src/routes/navigation-pages';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={globalStyle.safeArea}>
        <Routes />
      </SafeAreaView>
    </>
  );
};

export default App;
