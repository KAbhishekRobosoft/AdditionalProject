import React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  ScrollView
} from 'react-native';
import {Formik, Field} from 'formik';
import CustomField from '../components/CustomField';
import {LargeButton} from '../components/Button';
import {SmallButton} from '../components/Button';

function Login() {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        resizeMode="cover"
        style={styles.imgBack}>
        <ScrollView style={{flex:1}}>
        <View style={{flex:1}}>
          <Image
            style={styles.logoImg}
            source={require('../assets/images/logo.png')}
          />
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={values => console.log(values)}>
              {({handleSubmit, isValid}) => (
                <View style={{}}>
                  <Field
                    component={CustomField}
                    label="Enter Password"
                    name="password"
                    keyboardType="email-address"
                  />
                  <Field
                    component={CustomField}
                    name="confirmPassword"
                    label="Confirm Password"
                    secureTextEntry
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
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imgBack: {
    flex:1,
  },

  skipText: {
    fontFamily: 'Avenir Book',
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 80,
    right: 40,
    alignSelf: 'flex-end',
  },


  logoImg: {
    top: 150,
    alignSelf: 'center',
  },

  fieldStyle: {
    marginTop:220,
  },

  butView: {
    width: '100%',
    marginTop: 100,
    alignItems: 'center',
  },
});
export default Login;
