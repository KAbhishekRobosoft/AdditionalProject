import React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {Formik, Field} from 'formik';
import CustomField from '../components/CustomField';
import {LargeButton, SmallButton} from '../components/Button';
import { otpValidationSchema } from '../utils/Functions';

function OtpScreen() {
  const {height, width} = useWindowDimensions();
  const top =
    width > height
      ? Platform.OS === 'ios'
        ? 50
        : 50
      : Platform.OS === 'ios'
      ? 72
      : 72;
  const top1 =
    width > height
      ? Platform.OS === 'ios'
        ? 80
        : 100
      : Platform.OS === 'ios'
      ? 120
      : 180;

  const top2 =
    width > height
      ? Platform.OS === 'ios'
        ? 80
        : 80
      : Platform.OS === 'ios'
      ? 140
      : 140;

  const bottom =
    width > height
      ? Platform.OS === 'ios'
        ? 230
        : 230
      : Platform.OS === 'ios'
      ? 230
      : 230;
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        resizeMode="cover"
        style={styles.imgBack}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          <View style={{flex: 1, marginTop: 50}}>
            <View>
              <Image
                style={[styles.logoImg, {top: top}]}
                source={require('../assets/images/logo.png')}
              />
            </View>
            <View style={{top: top2, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 22,
                  color: 'white',
                  fontFamily: 'Avenir Book',
                }}>
                We have sent you an OTP.
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  fontFamily: 'Avenir Book',
                }}>
                Please enter it below.
              </Text>
            </View>

            <Formik
              initialValues={{
                  otp:''
              }}
              validationSchema={otpValidationSchema}
              onSubmit={values => console.log(values)}>
              {({handleSubmit, isValid}) => (
                <View style={{marginTop: top1}}>
                  <Field
                    component={CustomField}
                    label="Enter OTP"
                    name="otp"
                    keyboardType="phone-pad"
                  />
                  <View style={styles.butView}>
                    <LargeButton
                      onPress={handleSubmit}
                      title="Submit"
                      disabled={!isValid}
                    />
                  </View>
                </View>
              )}
            </Formik>
            <View style={{bottom: bottom, alignItems: 'center'}}>
              <SmallButton title="Resend OTP" />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imgBack: {
    flex: 1,
  },

  otpText: {},

  skipText: {
    fontFamily: 'Avenir Book',
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 80,
    right: 40,
    alignSelf: 'flex-end',
  },

  logoImg: {
    alignSelf: 'center',
  },

  fieldStyle: {
    marginTop: 220,
  },

  butView: {
    width: '100%',
    marginVertical: 100,
    alignItems: 'center',
  },
});
export default OtpScreen;
