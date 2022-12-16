import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export function LargeButton({title,onPress,disabled,backgroundColor,width,borderRadius,fontFamily}) {
  return (
    <View style={{width:"100%",alignItems:"center"}}>
      <TouchableOpacity onPress={onPress} style={[styles.buttonView,{backgroundColor:backgroundColor,width:width,borderRadius:parseInt(borderRadius)}]} disabled={disabled}>
        <Text style={[styles.textStyle,{fontFamily:fontFamily}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonView: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor:"white",
  },

  textStyle: {
    color: 'white',
    fontSize:20,
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

