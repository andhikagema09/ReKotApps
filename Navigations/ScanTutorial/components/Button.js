import React, {memo, useCallback, useContext} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GlobalContextDispatch} from '../../../context';
import {resetQrData} from '../../../context/actions';

const Button = () => {
  const navigation = useNavigation();
  const dispatch = useContext(GlobalContextDispatch);
  /**
   * go to qr scanner and reset qr data if any
   */
  const handleGoToScanner = useCallback(() => {
    dispatch({type: resetQrData});
    navigation.navigate('Scanner');
  }, [dispatch, navigation]);
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={handleGoToScanner}>
        <Text style={styles.textStyle}>Oke, Saya mengerti</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 24,
  },
  touchableContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    height: 30,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 20,
    color: 'white',
  },
});

export default memo(Button);
