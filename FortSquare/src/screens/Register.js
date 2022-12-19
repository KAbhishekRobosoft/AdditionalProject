import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  View,
  ScrollView,
} from 'react-native';
import {Formik, Field} from 'formik';
import CustomField from '../components/CustomField';
import {LargeButton} from '../components/Button';
import {registerValidationSchema} from '../utils/Functions';
import {register} from '../services/UserCredentials';
import Toast from 'react-native-simple-toast';

function Register({navigation}) {
  async function signUp(userData) {
    const response = await register(userData);
    if (response.hasOwnProperty('message')) {
      Toast.show('Registered Successfully');
      navigation.navigate('login');
    } else {
      Toast.show('User already exists');
    }
  }

  const initialValues = {
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        resizeMode="cover"
        style={styles.imgBack}>
        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1, marginVertical: 90}}>
            <Image
              style={styles.logoImg}
              source={require('../assets/images/logo.png')}
            />
            <Formik
              initialValues={initialValues}
              validationSchema={registerValidationSchema}
              onSubmit={values => {
                signUp(values);
              }}>
              {({handleSubmit, isValid, resetForm}) => (
                <View style={styles.fieldView}>
                  <Field
                    component={CustomField}
                    label="Email"
                    name="email"
                    keyboardType="email-address"
                  />
                  <Field
                    component={CustomField}
                    name="mobileNumber"
                    label="Mobile Number"
                    keyboardType="phone-pad"
                  />
                  <Field
                    component={CustomField}
                    label="Password"
                    name="password"
                    secureTextEntry
                  />
                  <Field
                    component={CustomField}
                    name="confirmPassword"
                    label="Confirm Password"
                    secureTextEntry
                  />
                  <View style={styles.butView}>
                    <LargeButton
                      onPress={() => {
                        handleSubmit();
                        resetForm({initialValues});
                      }}
                      title="Login"
                      disabled={!isValid}
                      width="90%"
                      borderRadius="8"
                      backgroundColor="transparent"
                      fontFamily="Avenir Book"
                    />
                  </View>
                </View>
              )}
            </Formik>
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

  skipText: {
    fontFamily: 'Avenir Book',
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 80,
    right: 40,
    alignSelf: 'flex-end',
  },

  google: {
    width: 180,
    borderRadius: 8,
    left: 10,
    height: 50,
  },

  fieldView: {
    marginTop: 100,
  },

  facebook: {
    width: 180,
    borderRadius: 8,
    right: 5,
    height: 50,
  },

  accountText: {
    alignItems: 'center',
    marginTop: 34,
  },

  alter: {
    fontFamily: 'Avenir Book',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '10%',
    height: 40,
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: '#3E3C57',
  },

  alterText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Avenir Book',
  },

  otherLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 20,
  },

  logoImg: {
    top: 62,
    alignSelf: 'center',
  },

  fieldStyle: {
    top: 114,
  },

  butView: {
    width: '100%',
    marginTop: 110,
    alignItems: 'center',
  },

  forgotView: {
    marginTop: 34,
    alignItems: 'center',
  },
});
export default Register;
