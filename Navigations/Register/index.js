import React, {memo, useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from './components/Logo';
import TextInput from '../../components/TextInput';
import Button from './components/Button';
import {RegisterEndPoint} from '../../ApiEndpoints';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [nik, setNik] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);

  const navigate = useNavigation();

  const handleOnChangeFullName = useCallback(text => {
    setFullName(text);
  }, []);

  const handleOnChangeNik = useCallback(text => {
    setNik(text);
  }, []);

  const handleOnChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);

  const handleOnChangePassword = useCallback(text => {
    setPassword(text);
  }, []);

  const handleButtonClick = useCallback(async () => {
    setLoadingButton(true);
    const postResult = await fetch(RegisterEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        NIK: nik,
        email,
        password,
      }),
    });
    const result = await postResult.json();
    console.log(result);
    setLoadingButton(false);
    const {success, data} = result;
    if (success) {
      alert('pendaftaran berhasil');
      navigate.goBack();
    } else {
      alert(JSON.stringify(data));
    }
  }, [email, fullName, navigate, nik, password]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackgroundContainer}
        imageStyle={styles.imageStyle}
        source={require('../assets/BackgroundAngkot.png')}>
        <ScrollView
          style={styles.scrollViewContainer}
          contentContainerStyle={styles.scrollViewContent}>
          <Logo />
          <TextInput
            marginTop={62}
            label="Nama (Sesuai dengan KTP)"
            handleOnChange={handleOnChangeFullName}
          />
          <TextInput
            marginTop={8}
            label="Nomor Induk Kependudukan"
            handleOnChange={handleOnChangeNik}
          />
          <TextInput
            marginTop={8}
            label="E-mail"
            handleOnChange={handleOnChangeEmail}
          />
          <TextInput
            marginTop={8}
            label="Kata Sandi"
            handleOnChange={handleOnChangePassword}
            isPassword
          />
          <Button handleOnPress={handleButtonClick} isLoading={loadingButton} />
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

export default memo(Register);
