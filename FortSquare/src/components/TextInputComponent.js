import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function TextInputComponent({name, placeholder,onFocus}) {
  return (
    <View style={styles.inputContainer}>
      <Icon style={styles.searchIcon} name={name} size={22} color="#dfdfdf" />
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        keyboardType="default"
        onFocus={onFocus}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    padding: 5,
    width: '85%',
    height: 45,
    fontFamily: 'Avenir Book',
    backgroundColor: 'white',
    borderColor: 'black',
    borderTopWidth: 1,
    borderColor: 'transparent',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },

  searchIcon: {
    backgroundColor: 'white',
    height: 45,
    width: 40,
    padding: 10,
    borderColor: 'transparent',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
    borderWidth:1,
  },

  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TextInputComponent;
