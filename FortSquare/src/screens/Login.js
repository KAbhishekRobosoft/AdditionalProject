import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  Button,
  View,
  ScrollView,
  useWindowDimensions,
  Platform
} from 'react-native';
import {Formik, Field} from 'formik';
import CustomField from '../components/CustomField';
import {LargeButton} from '../components/Button';
import {SmallButton} from '../components/Button';

function Login() {
    const {height,width}= useWindowDimensions()
    const top= width > height ? (Platform.OS === "ios" ? 50 : 50) : (Platform.OS === "ios" ? 72:72)
    const top1= width > height ? (Platform.OS === "ios" ? 80 : 80) : (Platform.OS === "ios" ? 120:120)
    
    return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        resizeMode="cover"
        style={styles.imgBack}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
        <View style={{flex:1}}>
          <Text style={styles.skipText}>Skip {'>'}</Text>
          <Image
            style={[styles.logoImg,{top:top}]}
            source={require('../assets/images/logo.png')}
          />

            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={values => console.log(values)}>
              {({handleSubmit, isValid}) => (
                <View style={{marginTop:top1}}>
                  <Field
                    component={CustomField}
                    label="Email"
                    name="email"
                    keyboardType="email-address"
                  />
                  <Field
                    component={CustomField}
                    name="password"
                    label="Password"
                    secureTextEntry
                  />
                  <View style={styles.forgotView}>
                    <SmallButton title="Forgot Password?" />
                  </View>
                  <View style={styles.butView}>
                    <LargeButton
                      onPress={handleSubmit}
                      title="Login"
                      disabled={!isValid}
                    />
                  </View>
                </View>
              )}
            </Formik>
            <View style={styles.accountText}>
              <SmallButton title="Create an Account" />
            </View>
            <View style={styles.alter}>
              <Text style={styles.alterText}>OR</Text>
            </View>
            <View style={styles.otherLogin}>
              <Image
                style={styles.facebook}
                source={require('../assets/images/facebook.png')}
              />
              <Image
                style={styles.google}
                source={require('../assets/images/google.png')}
              />
            </View>
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
    marginTop: 60,
    right: 40,
    alignSelf: 'flex-end',
  },

  google: {
    width: 180,
    borderRadius: 8,
    left: 10,
    height: 50,
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
    marginVertical: 20,
  },

  logoImg: {
    alignSelf: 'center',
  },

  fieldStyle: {
    top: 114,
  },

  butView: {
    width: '100%',
    marginTop: 42,
    alignItems: 'center',
  },

  forgotView: {
    marginTop: 34,
    alignItems: 'center',
  },
});
export default Login;
