import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Spinner from '../../../components/Spinner';

const Button = ({handleOnPress, isLoading}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handleOnPress}>
      {!isLoading && <Text style={styles.textStyle}>Login</Text>}
      {isLoading && <Spinner spinnerColor="white" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 37,
    backgroundColor: '#B32727',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 20,
    color: 'white',
  },
});

export default memo(Button);
