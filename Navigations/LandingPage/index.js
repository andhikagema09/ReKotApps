import React, {memo, useEffect, useContext} from 'react';
import {SafeAreaView, StyleSheet, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Logo from './components/Logo';
import Title from './components/Title';
import Button from './components/Button';
import Footer from './components/Footer';
import {GlobalContextDispatch, GlobalContext} from '../../context';
import {storeLoginData} from '../../context/actions';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useContext(GlobalContextDispatch);
  const {loginUseCase} = useContext(GlobalContext);

  /**
   * check token from storage
   */
  useEffect(() => {
    const isTokenAvailable = loginUseCase?.data?.token || '';
    if (!isTokenAvailable) {
      (async () => {
        try {
          const getTokenValue = await AsyncStorage.getItem('login_token');
          if (getTokenValue !== null) {
            dispatch({
              type: storeLoginData,
              data: {
                success: true,
                token: getTokenValue,
              },
            });
          }
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [dispatch, loginUseCase]);

  /**
   * auto login and redirect from login page
   */
  useEffect(() => {
    const isTokenAvailable = loginUseCase?.data?.token || '';
    if (isTokenAvailable) {
      navigation.navigate('How To Scan');
    }
  }, [loginUseCase, navigation]);
  return (
    <SafeAreaView style={style.backgroundLogin}>
      <ImageBackground
        style={style.container}
        imageStyle={style.imageStyle}
        source={require('../assets/BackgroundAngkot.png')}>
        <Logo />
        <Title />
        <Button text="Login" type="login" marginTop={119} />
        <Button text="Daftar" type="daftar" marginTop={30} />
        <Footer />
      </ImageBackground>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundLogin: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
  },
  imageStyle: {
    opacity: 0.4,
  },
});

export default memo(Login);
