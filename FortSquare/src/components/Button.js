import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export function LargeButton({title,onPress,disabled}) {
  return (
    <View style={{width:"100%",alignItems:"center"}}>
      <TouchableOpacity onPress={onPress} style={styles.buttonView} disabled={disabled}>
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonView: {
    width: '90%',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor:"white",
    borderRadius:8
  },

  textStyle: {
    color: 'white',
    fontSize:20,
    fontFamily:"Avenir Book"
  },

  smallText:{
    fontFamily:"Avenir Book",
    fontSize:18,
    color:"#b5abab"
  }
});

export function SmallButton({title}){
    return(
        <View>
            <TouchableOpacity>
                <Text style={styles.smallText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

