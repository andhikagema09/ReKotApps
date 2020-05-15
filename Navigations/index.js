import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingPage from './LandingPage';
import Register from './Register';
import Login from './Login';
import ScanTutorial from './ScanTutorial';
import CameraScanner from './CameraScanner';
import ReportSubmission from './ReportSubmission';

const Stack = createStackNavigator();

const landingPageOptions = {
  header: () => null,
};

const howToScanOptions = {
  header: () => null,
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={landingPageOptions} name="Home">
          {() => <LandingPage />}
        </Stack.Screen>
        <Stack.Screen name="Register">{() => <Register />}</Stack.Screen>
        <Stack.Screen name="Login">{() => <Login />}</Stack.Screen>
        <Stack.Screen name="How To Scan" options={howToScanOptions}>
          {() => <ScanTutorial />}
        </Stack.Screen>
        <Stack.Screen name="Scanner">{() => <CameraScanner />}</Stack.Screen>
        <Stack.Screen name="Report Submission">
          {() => <ReportSubmission />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
