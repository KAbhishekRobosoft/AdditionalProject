import React from 'react'
import { FlatList,View } from 'react-native'

function VirtualList({data,renderItem,keyExtractor}) {
  return (
    <View>
        <FlatList showsVerticalScrollIndicator={false} data={data} renderItem= {renderItem} keyExtractor={keyExtractor}/>
    </View>
  )
}

export default VirtualList