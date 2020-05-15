import React, {memo} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const DontHaveAccount = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textStyle}>Belum punya akun? Daftar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  textStyle: {
    fontSize: 15,
    lineHeight: 19,
    color: '#B32727',
  },
});

export default memo(DontHaveAccount);
