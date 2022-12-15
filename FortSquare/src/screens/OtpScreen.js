import React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  ScrollView,
  useWindowDimensions,
  Platform,
} from 'react-native';
import {Formik, Field} from 'formik';
import CustomField from '../components/CustomField';
import {LargeButton} from '../components/Button';

function OtpScreen() {
  const {height, width} = useWindowDimensions();
  const top =
    width > height
      ? Platform.OS === 'ios'
        ? 80
        : 80
      : Platform.OS === 'ios'
      ? 200
      : 200;
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        resizeMode="cover"
        style={styles.imgBack}>
        <View style={{alignItems: 'center', marginTop: top}}>
        <ScrollView>
        <View style={{flex: 1, marginVertical: 90}}>
          <Image
            style={styles.logoImg}
            source={require('../assets/images/logo.png')}
          />
          <View style={{marginTop:40}}>
            <Text style={{fontFamily:"Avenir Book",textAlign: 'center',lineHeight:30,fontSize:20,color:"white"}}>We have sent you an OTP.</Text>
            <Text style={{fontFamily:"Avenir Book",textAlign: 'center',fontSize:20,color:"white"}}>Please enter it below.</Text>
          </View>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={values => console.log(values)}>
            {({handleSubmit, isValid}) => (
              <View style={{marginTop: 15}}>
                <Field
                  component={CustomField}
                  label="Enter OTP"
                  name="otp"
                  keyboardType="phone-pad"
                />
                <Text style={styles.resendOtp}>Resend OTP</Text>
                <View style={styles.butView}>
                  <LargeButton
                    onPress={handleSubmit}
                    title="Get in!"
                    disabled={!isValid}
                  />
                </View>
              </View>
            )}
          </Formik>
          </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imgBack: {
    flex: 1,
  },

  skipText: {
    fontFamily: 'Avenir Book',
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 80,
    right: 40,
    alignSelf: 'flex-end',
  },

  resendOtp: {
    alignSelf: 'center',
    fontFamily: 'Avenir Book',
    fontSize: 14,
    color: '#FFFFFF',
    top: 20,
  },

  logoImg: {
    alignSelf: 'center',
    top: 52,
  },

  butView: {
    width: '100%',
    marginVertical: 60,
    alignItems: 'center',
  },
});
export default OtpScreen;
