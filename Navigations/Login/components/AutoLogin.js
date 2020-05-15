import React, {memo, useState, useCallback} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, StyleSheet, Text} from 'react-native';

const AutoLogin = ({isChecked, handleOnChange}) => {
  return (
    <View style={styles.container}>
      <CheckBox
        tintColors={{
          true: '#B32727',
        }}
        onValueChange={handleOnChange}
        value={isChecked}
      />
      <Text style={styles.textStyle}>Masuk secara otomatis</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
    flexDirection: 'row',
  },
  textStyle: {
    width: 140,
    height: 18,
    fontSize: 13,
    lineHeight: 17,
    color: '#B32727',
  },
});

export default memo(AutoLogin);
