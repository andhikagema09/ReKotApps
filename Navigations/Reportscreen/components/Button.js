import React, {memo, useCallback, useContext} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Button = () => {
  const navigation = useNavigation();
  const handleGoToSubmitted = useCallback(() => {
    navigation.navigate('Submitted');
  }, [navigation]);
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={handleGoToSubmitted}>
        <Text style={styles.textStyle}>Kirim Laporan</Text>
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
