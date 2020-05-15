import React, {memo} from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import Logo from './components/Logo';
import img from './assets/Stiker-KIR-Scania1.png';
import Button from './components/Button';

const ScanTutorial = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Logo />
        <Text style={styles.textStyle}>
          Scan QR code yang terdapat dalam stiker KIR. Stiker KIR dapat
          ditemukan di pintu angkot.
        </Text>
        <Image
          style={styles.imageStyle}
          width={240}
          height={180}
          source={img}
        />
        <Button />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B32727',
  },
  scrollViewContainer: {
    alignItems: 'center',
    paddingHorizontal: 60,
  },
  imageStyle: {
    marginTop: 16,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 24,
  },
});

export default memo(ScanTutorial);
