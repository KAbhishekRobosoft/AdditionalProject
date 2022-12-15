import React from 'react'
import { FlatList,View } from 'react-native'

function VirtualList({data,renderItem}) {
  return (
    <View>
        <FlatList data={data} renderItem= {renderItem} />
    </View>
  )
}

export default VirtualList