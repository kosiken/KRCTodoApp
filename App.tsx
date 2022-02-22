/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  useColorScheme,
  // View
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Block from './app/components/Block';
import KRCButton from './app/components/KRCButton';
import KRCText from './app/components/KRCText';
import Spacer from './app/components/Spacer';

const App: React.FC<{}> = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Block center>
        <Block padding={[0, 20]} flex={false}>
          <KRCText bold large textAlign="center">
            Get Things done
          </KRCText>
          <Spacer spacing={5} />
          <KRCText textAlign="center">
            The app that helps you do things faster and also other stuffs too,
            just whatever
          </KRCText>
        </Block>
        <Spacer />
        <KRCButton title="Lion" />
      </Block>
    </SafeAreaView>
  );
};

export default App;
