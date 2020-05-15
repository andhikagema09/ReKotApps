import React, {memo, useCallback, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {GlobalContextDispatch, GlobalContext} from '../../context';
import {storeQrData} from '../../context/actions';
import {useNavigation} from '@react-navigation/native';

const CameraScanner = () => {
  const dispatch = useContext(GlobalContextDispatch);
  const {qrUseCase} = useContext(GlobalContext);
  const navigation = useNavigation();
  const handleScanBarcode = useCallback(
    ({barcodes}) => {
      if (qrUseCase.data === undefined) {
        dispatch({type: storeQrData, data: barcodes});
        navigation.navigate('Report Submission');
      }
    },
    [dispatch, navigation, qrUseCase.data],
  );
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.cameraStyle}
        onGoogleVisionBarcodesDetected={handleScanBarcode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  cameraStyle: {
    width: 240,
    height: 240,
  },
});

export default memo(CameraScanner);
