import React, {memo} from 'react';
import {ActivityIndicator} from 'react-native';

const Spinner = ({spinnerColor}) => {
  return <ActivityIndicator color={spinnerColor} />;
};

export default memo(Spinner);
