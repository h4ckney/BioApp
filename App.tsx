/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import ReactNativeBiometrics from 'react-native-biometrics'
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar, TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const ee = () => {
    ReactNativeBiometrics.isSensorAvailable()
        .then((resultObject) => {
          const {available, biometryType} = resultObject

          if (available && biometryType === ReactNativeBiometrics.TouchID) {
            console.log('TouchID is supported')
          } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
            console.log('FaceID is supported')
          } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
            console.log('Biometrics is supported')
          } else {
            console.log('Biometrics not supported')
          }
        })
  }

  return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
        <TouchableOpacity onPress={()=>ee()} style={{backgroundColor: 'red', width: '100%', height: '50%'}}>

        </TouchableOpacity>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
          <Header/>
          <View
              style={{
                backgroundColor: isDarkMode ? Colors.black : Colors.white,
              }}>
            <LearnMoreLinks/>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

export default App;
