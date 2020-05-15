import React, {memo, useCallback} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Button = ({text, type, marginTop}) => {
  const navigation = useNavigation();

  const handleGoToLoginPage = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  const handleGoToRegisterPage = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  if (type === 'login') {
    return (
      <TouchableOpacity
        style={[styles.LoginButton, {marginTop}]}
        onPress={handleGoToLoginPage}>
        <Text style={styles.LoginFont}>{text}</Text>
      </TouchableOpacity>
    );
  } else if (type === 'daftar') {
    return (
      <TouchableOpacity
        style={[styles.DaftarButton, {marginTop}]}
        onPress={handleGoToRegisterPage}>
        <Text style={styles.DaftarFont}>{text}</Text>
      </TouchableOpacity>
    );
  }
  return;
};

const styles = StyleSheet.create({
  LoginButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingTop: 12,
    paddingBottom: 12,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#B32727',
    marginLeft: 16,
    marginRight: 16,
  },
  LoginFont: {
    color: '#B32727',
    fontSize: 18,
    lineHeight: 23,
  },
  DaftarButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#B32727',
    marginLeft: 16,
    marginRight: 16,
  },
  DaftarFont: {
    color: 'white',
    fontSize: 18,
    lineHeight: 23,
  },
});

export default memo(Button);
