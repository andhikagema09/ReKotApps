import React, {memo} from 'react';
import {Text, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <Text style={styles.footerStyle}>
      Make Public Transportation Great Again
    </Text>
  );
};

const styles = StyleSheet.create({
  footerStyle: {
    position: 'absolute',
    bottom: 16,
    fontSize: 13,
    lineHeight: 16,
    color: '#B32727',
  },
});

export default memo(Footer);
