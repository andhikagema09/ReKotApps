import React, {memo} from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import Logo from './components/Logo';
import Button from './components/Button';
import Checkbox1 from './components/Checkbox1';
import Checkbox2 from './components/Checkbox2';
import Checkbox3 from './components/Checkbox3';
import Checkbox4 from './components/Checkbox4';
import Checkbox5 from './components/Checkbox5';
import Checkbox6 from './components/Checkbox6';

const ReportScreen = () => {
    const [IsiLaporan, setIsiLaporan] = useState('');
    const handleOnChangeIsiLaporan = useCallback(text => {
        setIsiLaporan(text);
    }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Logo />
        <Text style={styles.textStyle}>
          Apa yang ingin anda laporkan?
        </Text>
         <Checkbox1 isChecked={isChecked} handleOnChange={handleOnChange} />
         <Checkbox2 isChecked={isChecked} handleOnChange={handleOnChange} />
         <Checkbox3 isChecked={isChecked} handleOnChange={handleOnChange} />
         <Checkbox4 isChecked={isChecked} handleOnChange={handleOnChange} />
         <Checkbox5 isChecked={isChecked} handleOnChange={handleOnChange} />
         <Checkbox6 isChecked={isChecked} handleOnChange={handleOnChange} />
          <TextInput
            marginTop={4}
            label="Isi Laporan Anda"
            handleOnChange={handleOnChangeFullName}
          />
          <Button handleOnPress={handleOnPress} isLoading={loadingButton} />
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B32727',
  },
  scrollViewContainer: {
    alignItems: 'center',
    paddingHorizontal: 60,
  },
  imageStyle: {
    marginTop: 16,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 24,
  },
});

export default memo(ReportScreen);
