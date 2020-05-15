import React, {memo} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Title = () => {
  return (
    <View style={styles.TitleContainer}>
      <Text style={[styles.textStyle, {color: '#B32727'}]}>Re</Text>
      <Text style={styles.textStyle}>Kot</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 26,
  },
  textStyle: {
    fontSize: 43,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 54,
  },
});

export default memo(Title);
