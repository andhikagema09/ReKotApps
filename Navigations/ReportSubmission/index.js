import React, {memo, useContext, useEffect} from 'react';
import {Text} from 'react-native';
import {GlobalContext, GlobalContextDispatch} from '../../context';
import {resetQrData} from '../../context/actions';
import {useNavigation} from '@react-navigation/native';

const ReportSubmission = () => {
  const {qrUseCase} = useContext(GlobalContext);
  const navigation = useNavigation();
  const dispatch = useContext(GlobalContextDispatch);
  /**
   * reset qr data if screen close
   */
  useEffect(() => {
    return () => {
      dispatch({type: resetQrData});
      navigation.navigate('Report Screen');
    };
  }, [dispatch, navigation]);
  return <Text>{JSON.stringify(qrUseCase)}</Text>;
};

export default memo(ReportSubmission);
