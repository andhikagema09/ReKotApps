import React, {memo, useContext, useEffect} from 'react';
import {Text} from 'react-native';
import {GlobalContext, GlobalContextDispatch} from '../../context';
import {resetQrData} from '../../context/actions';

const ReportSubmission = () => {
  const {qrUseCase} = useContext(GlobalContext);
  const dispatch = useContext(GlobalContextDispatch);
  /**
   * reset qr data if screen close
   */
  useEffect(() => {
    return () => {
      dispatch({type: resetQrData});
    };
  }, [dispatch]);
  return <Text>{JSON.stringify(qrUseCase)}</Text>;
};

export default memo(ReportSubmission);
