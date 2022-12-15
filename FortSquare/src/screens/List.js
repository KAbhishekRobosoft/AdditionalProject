import React from 'react'
import {View,Text} from 'react-native'
function List({item}) {
  return (
    <View style={{flex:1}}>
        <Text>{item.title}</Text>
    </View>
  )
}

export default List