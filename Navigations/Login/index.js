import React, {memo, useState, useCallback, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Logo from './components/Logo';
import TextInput from '../../components/TextInput';
import AutoLogin from './components/AutoLogin';
import Button from './components/Button';
import DontHaveAccount from './components/DontHaveAccount';
import {GlobalContextDispatch} from '../../context';
import {storeLoginData} from '../../context/actions';
import {LoginEndPoint} from '../../ApiEndpoints';

const Login = () => {
  const dispatch = useContext(GlobalContextDispatch);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);

  const handleOnChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);

  const handleOnChangePassword = useCallback(text => {
    setPassword(text);
  }, []);

  const handleOnChange = useCallback(e => {
    setIsChecked(e);
  }, []);

  /**
   * handle login usecases
   */
  const handleOnPress = useCallback(async () => {
    setLoadingButton(true);
    const postResult = await fetch(LoginEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = await postResult.json();
    setLoadingButton(false);
    /**
     * store data to global context and go to scan page
     */
    dispatch({type: storeLoginData, data: result});
    try {
      await AsyncStorage.setItem('login_token', result.token);
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, email, password]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackgroundContainer}
        imageStyle={styles.imageStyle}
        source={require('../assets/BackgroundAngkot.png')}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          style={styles.scrollViewContainer}>
          <Logo />
          <TextInput
            label="E-mail"
            marginTop={72}
            handleOnChange={handleOnChangeEmail}
          />
          <TextInput
            label="Kata Sandi"
            marginTop={20}
            isPassword
            handleOnChange={handleOnChangePassword}
          />
          <AutoLogin isChecked={isChecked} handleOnChange={handleOnChange} />
          <Button handleOnPress={handleOnPress} isLoading={loadingButton} />
          <DontHaveAccount />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackgroundContainer: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  imageStyle: {
    opacity: 0.4,
  },
});

export default memo(Login);
