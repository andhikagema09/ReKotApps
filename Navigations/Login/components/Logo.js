import React, {memo} from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = () => {
  return (
    <Image style={styles.imageStyle} source={require('../assets/Vector.png')} />
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    marginTop: 80,
    width: 45,
    height: 45,
  },
});

export default memo(Logo);
