import React, {useState} from 'react';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'rn-material-ui-textfield';
import {SafeAreaView, StyleSheet} from 'react-native';

function CustomField(props) {
  const {
    field: {name, onBlur, onChange, value,placeholder},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;
  return (
    <SafeAreaView>
      <TextField
        keyboardType={props.keyboardType}
        labelFontSize={16}
        baseColor="#b5abab"
        textColor="white"
        lineWidth={1}
        labelTextStyle={{alignSelf: 'center',color:"white"}}
        style={{textAlign: 'center',fontSize:18}}
        containerStyle={{width: '90%', alignSelf: 'center'}}
        tintColor="#b5abab"
        {...inputProps}

      />
    </SafeAreaView>
  );
}

export default CustomField;
