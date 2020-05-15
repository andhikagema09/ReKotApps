import React, {memo} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const CustomTextInput = ({marginTop, label, handleOnChange, isPassword}) => {
  return (
    <View style={[styles.textInputContainer, {marginTop}]}>
      <Text style={styles.textStyle}>{label}</Text>
      <TextInput
        style={styles.textInputStyle}
        underlineColorAndroid="#B32727"
        onChangeText={handleOnChange}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    width: '100%',
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 20,
    color: '#B32727',
  },
  textInputStyle: {
    height: 40,
    marginTop: 8,
    color: '#B32727',
  },
});

export default memo(CustomTextInput);
