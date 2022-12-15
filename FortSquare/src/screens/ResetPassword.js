import React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  ScrollView,
  useWindowDimensions
} from 'react-native';
import {Formik, Field} from 'formik';
import CustomField from '../components/CustomField';
import {LargeButton} from '../components/Button';
import { resetPasswordValidationSchema } from '../utils/Functions';

function ResetPassword() {
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
          <Image
            style={[styles.logoImg,{top:top}]}
            source={require('../assets/images/logo.png')}
          />
            <Formik
              initialValues={{
                password: '',
                confirmPassword: '',
              }}
              validationSchema={resetPasswordValidationSchema}
              onSubmit={values => console.log(values)}>
              {({handleSubmit, isValid}) => (
                <View style={{marginTop:top1}}>
                  <Field
                    component={CustomField}
                    label="Enter Password"
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
    alignSelf: 'center',
  },

  fieldStyle: {
    marginTop:220,
  },

  butView: {
    width: '100%',
    marginVertical: 100,
    alignItems: 'center',
  },
});
export default ResetPassword;
