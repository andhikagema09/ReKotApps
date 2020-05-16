import React, {memo, useEffect, useContext} from 'react';
import {SafeAreaView, StyleSheet, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from './components/Logo';
import Footer from './components/Footer';



const Submitted = () => {
  return (
    <SafeAreaView style={style.backgroundLogin}>
      <ImageBackground
        style={style.container}
        imageStyle={style.imageStyle}
        source={require('../assets/BackgroundAngkot.png')}>
        <Logo />
        <Text style={styles.textStyleA}>
          Terima Kasih
        </Text>
        <Text style={styles.textStyleB}>
          Laporan Anda Sudah Kami Terima.
        </Text>
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
  },
  textStyleA: {
    fontSize: 22,
    lineHeight: 20,
    color: 'red',
    textAlign: 'center',
    marginTop: 24,
  },
  },
  textStyleB: {
    fontSize: 14,
    lineHeight: 20,
    color: 'red',
    textAlign: 'center',
    marginTop: 24,
  },
});

export default memo(Submitted);
